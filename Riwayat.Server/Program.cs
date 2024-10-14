using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

var builder = WebApplication.CreateBuilder(args);

// Add MongoDB configuration
builder.Services.Configure<MongoDbSettings>(builder.Configuration.GetSection("MongoDbSettings"));

// Add MongoDB context and services to the container
builder.Services.AddSingleton<MongoDbContext>();
builder.Services.AddScoped<DBService>(); // Replace MyService with your actual service class name

// Add services to the container.
builder.Services.AddControllers();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();  // Serve static files from wwwroot

app.UseRouting();

app.UseAuthorization();

app.MapControllers();

// Fallback to Angular's index.html for any non-API routes
app.MapFallbackToFile("index.html");

app.Run();
