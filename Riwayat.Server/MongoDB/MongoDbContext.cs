using MongoDB.Driver;
using Microsoft.Extensions.Options;

public class MongoDbContext
{
    private readonly IMongoDatabase _database;

    public MongoDbContext(IOptions<MongoDbSettings> mongoDbSettings)
    {
        var settings = mongoDbSettings.Value;
        var client = new MongoClient(settings.ConnectionString);
        _database = client.GetDatabase(settings.DatabaseName);
    }

    public IMongoDatabase Database => _database;

    public IMongoCollection<Vendor> Vendors
    {
        get
        {
            return _database.GetCollection<Vendor>("Vendors");
        }
    }
}
