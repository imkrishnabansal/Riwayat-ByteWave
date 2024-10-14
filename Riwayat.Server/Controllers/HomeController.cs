using Microsoft.AspNetCore.Mvc;

namespace Riwayat.Server.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
