using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

public class Vendor
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }

    [BsonElement("name")]
    public string Name { get; set; }

    [BsonElement("description")]
    public string Description { get; set; }

    [BsonElement("category")]
    public string Category { get; set; }

    [BsonElement("rating")]
    public double Rating { get; set; }
}
