export enum OrderStatus {
    // Order is created, ticket is not reserved
    Created = 'created',
    // The ticket is not available / order is cancelled by the user / order expires
    Cancelled = 'cancelled',
    // Order has successfully reserved the ticket
    AwaitingPayment = 'awaiting payment',
    // Order has successfully reserved the ticket and the user has paid the order.
    Completed = 'completed'
}