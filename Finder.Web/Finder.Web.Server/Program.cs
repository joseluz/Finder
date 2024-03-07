var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
//builder.Services.AddSwaggerGen();
// OpenApi 3.0
builder.Services.AddOpenApiDocument((document, provider) =>
{
    document.PostProcess = (document) =>
    {
        document.OpenApi = "3.0.0";
        document.Info.Version = "v1";
        document.Info.Title = "MyStore API";
        document.Info.Description = "MyStore Cool Description";
    };
});


var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    //app.UseSwagger();
    //app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.UseOpenApi();
app.UseSwaggerUi();

app.Run();
