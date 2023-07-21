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
    this.imgUrl = data.imgUrl
  }
}

