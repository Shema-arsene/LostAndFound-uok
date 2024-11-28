export function formatApiResponse(doc: any, ret: any) {
  ret.id = ret._id;
  ret.password = null;

  delete ret.__v;
  delete ret._id;
  delete ret.password;
}
