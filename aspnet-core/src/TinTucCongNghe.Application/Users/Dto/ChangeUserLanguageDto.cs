using System.ComponentModel.DataAnnotations;

namespace TinTucCongNghe.Users.Dto
{
    public class ChangeUserLanguageDto
    {
        [Required]
        public string LanguageName { get; set; }
    }
}