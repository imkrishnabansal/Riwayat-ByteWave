using MongoDB.Driver;
using Microsoft.Extensions.Options;

public class MongoDbContext
{
    private readonly IMongoDatabase _database = null;

    public MongoDbContext(IOptions<MongoDbSettings> settings)
    {
        var client = new MongoClient(settings.Value.ConnectionString);
        if (client != null)
            _database = client.GetDatabase(settings.Value.Database);
    }

    public IMongoCollection<Vendor> Vendors
    {
        get
        {
            return _database.GetCollection<Vendor>("Vendors");
        }
    }
}
