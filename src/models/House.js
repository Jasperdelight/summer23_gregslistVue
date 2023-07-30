export class House {
  constructor(data) {
    this.id = data.id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.year = data.year
    this.price = data.price
    this.description = data.description
    this.creatorId = data.creatorId
    this.updatedAt = data.updatedAt
    this.createdAt = data.createdAt
    this.creator = data.creator
    this.imgUrl = data.imgUrl || "https://plus.unsplash.com/premium_photo-1683133571543-fdc948a9dddc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
  }
}

