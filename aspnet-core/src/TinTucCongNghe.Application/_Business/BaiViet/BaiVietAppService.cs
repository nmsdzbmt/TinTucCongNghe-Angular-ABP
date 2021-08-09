using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using TinTucCongNghe._Business.Dto;
using TinTucCongNghe._Business.Entities;


namespace TinTucCongNghe._Business
{ 
    public class BaiVietAppService :
        CrudAppService<
            BaiViet, //The Book entity
            BaiVietDto, //Used to show books
            Guid, //Primary key of the book entity
            PagedAndSortedResultRequestDto, //Used for paging/sorting
            CreateBaiVietDto>, //Used to create/update a book
        IBaiVietAppService
    {
        private readonly BaiVietManager _BaiVietManager;
        private readonly IRepository<BaiViet, Guid> _BaiVietRepository;
        public BaiVietAppService(IRepository<BaiViet, Guid> BaiVietRepository)
           : base(BaiVietRepository)
        {
            //_theLoai = theLoai;
            _BaiVietRepository = BaiVietRepository;
        }
        public List<BaiVietDto> GetListAsync(SearchTheLoai input)
        {
            var query = _BaiVietRepository
                .GetAll()
                .Where(p => p.TheLoaiID == input.TheLoaiID)
                .Select(p => new BaiVietDto
                {
                    Title = p.Title,
                    imgSrc = p.imgSrc,
                    Description = p.Description
                });
            return query.ToList();
        }
    }
}