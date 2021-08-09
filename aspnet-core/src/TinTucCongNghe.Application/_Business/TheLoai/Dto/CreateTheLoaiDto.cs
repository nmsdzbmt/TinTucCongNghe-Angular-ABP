using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace TinTucCongNghe._Business.Dto
{
    public class CreateTheLoaiDto : AuditedEntityDto<Guid>
    {
        [Required]
        [StringLength(128)]
        public string Code { get; set; }
        [Required]
        [StringLength(128)]
        public string Name { get; set; }
        [Required]
        [StringLength(128)]
        public string NameSearch { get; set; }
        [Required]
        public string Slug { get; set; }
        [Required]
        public int Location { get; set; }
        [Required]
        public Boolean Status { get; set; }
        [Required]
        public Boolean isDelete { get; set; }
         
    }
}
