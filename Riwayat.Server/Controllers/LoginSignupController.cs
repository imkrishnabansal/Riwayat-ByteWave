using Microsoft.AspNetCore.Mvc;

namespace Riwayat.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginSignupController : ControllerBase
    {
        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginModel loginModel)
        {
            if (loginModel.Username == "admin" && loginModel.Password == "admin")
                return Ok(new { Role = "admin" });
            if (loginModel.Username == "user" && loginModel.Password == "user")
                return Ok(new { Role = "user" });
            if (loginModel.Username == "serviceprov" && loginModel.Password == "serviceprov")
                return Ok(new { Role = "serviceprov" });

            return Unauthorized("Invalid credentials");
        }

        [HttpPost("signup")]
        public IActionResult Signup([FromBody] SignupModel signupModel)
        {
            // Add logic to store user in database
            return Ok("Account created successfully");
        }
    }

    public class LoginModel
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }

    public class SignupModel
    {
        public string Name { get; set; }
        public string Phone { get; set; }
        public string NewPassword { get; set; }
    }
}
