using Abp.Configuration.Startup;
using Abp.Localization.Dictionaries;
using Abp.Localization.Dictionaries.Xml;
using Abp.Reflection.Extensions;

namespace TinTucCongNghe.Localization
{
    public static class TinTucCongNgheLocalizationConfigurer
    {
        public static void Configure(ILocalizationConfiguration localizationConfiguration)
        {
            localizationConfiguration.Sources.Add(
                new DictionaryBasedLocalizationSource(TinTucCongNgheConsts.LocalizationSourceName,
                    new XmlEmbeddedFileLocalizationDictionaryProvider(
                        typeof(TinTucCongNgheLocalizationConfigurer).GetAssembly(),
                        "TinTucCongNghe.Localization.SourceFiles"
                    )
                )
            );
        }
    }
}
