using AutoMapper;
using TinTucCongNghe._Business.Entities;

namespace TinTucCongNghe._Business.Dto
{
    public class BaiVietMapProfile : Profile
    {
        public BaiVietMapProfile()
        {
            CreateMap<BaiViet, BaiVietDto>();// từ csdl truyền qua Dto -  select
            CreateMap<CreateBaiVietDto, BaiViet>();// Dto truyền vào CSLD - update
        }

        //private void CreateMap<T1, T2>()
        //{
        //    throw new NotImplementedException();
        //}
    }
}
