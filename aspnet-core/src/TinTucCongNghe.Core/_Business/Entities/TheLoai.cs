using Abp.Domain.Entities.Auditing;
using System;

namespace TinTucCongNghe._Business.Entities
{
    public class TheLoai : AuditedAggregateRoot<Guid>
    {
        public string Code { get; set; }
        public string Name { get; set; }
        public string NameSearch { get; set; }
        public string Slug { get; set; }
        public int Location { get; set; }
        public Boolean Status { get; set; }
        public Boolean isDelete { get; set; }
       
    }
}
