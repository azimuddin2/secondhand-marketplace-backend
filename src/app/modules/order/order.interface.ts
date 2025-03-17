export type TOrder = {
  sellerId: string;
  buyerId: string;
  buyerEmail: string;
  itemId: string;
  itemTitle: string;
  price: number;
  status: 'Pending' | 'Shipping' | 'Delivered';
  paid: boolean;
  transactionId?: string;
};
