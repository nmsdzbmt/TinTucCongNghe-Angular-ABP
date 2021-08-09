using Abp.Domain.Repositories;
using Abp.Domain.Services;
using System;
using System.Linq;
using TinTucCongNghe._Business.Entities;

namespace TinTucCongNghe._Business
{
    public class BaiVietManager : DomainService
    {
        private readonly IRepository<BaiViet, Guid> _baiVietRepository;
        public BaiVietManager(
            IRepository<BaiViet, Guid> baiVietRepository
        )
        {
            _baiVietRepository = baiVietRepository;
        }
        public BaiViet GetBaiViet()
        {
            return _baiVietRepository.GetAll().FirstOrDefault();
        }
    }
}
