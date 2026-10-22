Create database BakeryMangement
On Primary
( name = Bakery_primary_data,filename = 'C:\SQLData\Bakery_primary_data.mdf',
size = 10mb ,maxsize = 100mb , filegrowth = 5 mb ),
filegroup secondary (name = Bakery_seondary_data , filename = 'C:\SQLData\Bakery_secondary_data.ndf',
size = 10mb , maxsize = 100mb , filegrowth = 5 mb )
log on ( name = Bekary_log1,filename = 'C:\SQLData\Bakery_log1.ldf', size = 5mb , maxsize = 50mb , filegrowth = 2mb ),
(name = Bekary_log2 ,filename = 'C:\SQLData\Bakery_log2.ldf', size = 5mb , maxsize = 50mb , filegrowth = 2mb );go