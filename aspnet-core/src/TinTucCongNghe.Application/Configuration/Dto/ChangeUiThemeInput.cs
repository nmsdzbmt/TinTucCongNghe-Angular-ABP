using System.ComponentModel.DataAnnotations;

namespace TinTucCongNghe.Configuration.Dto
{
    public class ChangeUiThemeInput
    {
        [Required]
        [StringLength(32)]
        public string Theme { get; set; }
    }
}
