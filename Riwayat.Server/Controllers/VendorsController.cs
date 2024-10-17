using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using MongoDB.Bson;
using System.Threading.Tasks;

[ApiController]
[Route("api/[controller]")]
public class VendorsController : ControllerBase
{
    private readonly IMongoCollection<Vendor> _vendorsCollection;

    public VendorsController(MongoDbContext context)
    {
        _vendorsCollection = context.Vendors;
    }

    [HttpGet("search/{term}")]
    public async Task<IActionResult> SearchVendors(string term)
    {
        var filter = Builders<Vendor>.Filter.Regex("category", new BsonRegularExpression(term, "i"));
        var vendors = await _vendorsCollection.Find(filter).ToListAsync();

        if (vendors == null || vendors.Count == 0)
        {
            return NotFound("No vendors found.");
        }

        return Ok(vendors);
    }
}
