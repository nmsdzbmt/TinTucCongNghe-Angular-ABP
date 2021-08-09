using Abp.Domain.Repositories;
using Abp.Domain.Services;
using System;
using System.Linq;
using TinTucCongNghe._Business.Entities;

namespace TinTucCongNghe._Business
{
    public class TheLoaitManager : DomainService
    {
        private readonly IRepository<TheLoai, Guid> _theLoaiRepository;
        public TheLoaitManager(            
            IRepository<TheLoai, Guid> theLoaiRepository
        )
        {  
            _theLoaiRepository = theLoaiRepository;
        }
        public TheLoai GetTheLoai()
        {
            return _theLoaiRepository.GetAll().FirstOrDefault();
        }
    }
}
