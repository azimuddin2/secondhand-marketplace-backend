import { FilterQuery, Query } from 'mongoose';

class QueryBuilder<T> {
  public modelQuery: Query<T[], T>;
  public query: Record<string, unknown>;

  constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
    this.modelQuery = modelQuery;
    this.query = query;
  }

  search(searchableFields: string[]) {
    const searchTerm = this?.query?.searchTerm;
    if (searchTerm) {
      this.modelQuery = this.modelQuery.find({
        $or: searchableFields.map(
          field =>
            ({
              [field]: { $regex: searchTerm, $options: 'i' },
            }) as FilterQuery<T>,
        ),
      });
    }

    return this;
  }

  filter() {
    const queryObj: Record<string, any> = { ...this.query };
    const excludeFields = ['searchTerm', 'sort', 'limit', 'page', 'fields'];
    excludeFields.forEach(element => delete queryObj[element]);

    // ✅ Handle Price Range Filtering Safely
    if (queryObj.minPrice || queryObj.maxPrice) {
      queryObj.price = {} as { $gte?: number; $lte?: number };

      if (queryObj.minPrice) queryObj.price.$gte = Number(queryObj.minPrice);
      if (queryObj.maxPrice) queryObj.price.$lte = Number(queryObj.maxPrice);

      delete queryObj.minPrice;
      delete queryObj.maxPrice;
    }

    // ✅ Handle Category Filtering
    if (queryObj.category) {
      queryObj.category = { $regex: new RegExp(queryObj.category, 'i') };
    }

    this.modelQuery = this.modelQuery.find(queryObj as FilterQuery<T>);
    return this;
  }

  sort() {
    const sort =
      (this?.query?.sort as string)?.split(',')?.join(' ') || '-createdAt';
    this.modelQuery = this.modelQuery.sort(sort as string);

    return this;
  }

  paginate() {
    const page = Number(this?.query?.page) || 1;
    const limit = Number(this?.query?.limit) || 10;
    const skip = (page - 1) * limit;

    this.modelQuery = this.modelQuery.skip(skip).limit(limit);

    return this;
  }

  fields() {
    const fields =
      (this?.query?.fields as string)?.split(',')?.join(' ') || '-__v';

    this.modelQuery = this.modelQuery.select(fields);

    return this;
  }

  async countTotal() {
    const totalQueries = this.modelQuery.getFilter();
    const totalDoc = await this.modelQuery.model.countDocuments(totalQueries);
    const page = Number(this?.query?.page) || 1;
    const limit = Number(this?.query?.limit) || 10;
    const totalPage = Math.ceil(totalDoc / limit);

    return {
      page,
      limit,
      totalDoc,
      totalPage,
    };
  }
}

export default QueryBuilder;
