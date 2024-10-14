using MongoDB.Driver;
using System.Collections.Generic;
using System.Threading.Tasks;


public class DBService
{
    private readonly IMongoCollection<DBEntity> _myCollection;

    public DBService(MongoDbContext mongoDbContext)
    {
        _myCollection = mongoDbContext.GetCollection<DBEntity>("RiwayatUsers");
    }

    public async Task<List<DBEntity>> GetAllAsync()
    {
        return await _myCollection.Find(_ => true).ToListAsync();
    }

    // Add more methods for CRUD operations as needed
}
