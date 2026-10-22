CREATE DATABASE BakeryManagement
ON PRIMARY
(
    NAME = Bakery_primary_data,
    FILENAME = 'C:\SQLData\Bakery_primary_data.mdf',
    SIZE = 10MB,
    MAXSIZE = 100MB,
    FILEGROWTH = 5MB
),
FILEGROUP SecondaryFG
(
    NAME = Bakery_secondary_data,
    FILENAME = 'C:\SQLData\Bakery_secondary_data.ndf',
    SIZE = 10MB,
    MAXSIZE = 100MB,
    FILEGROWTH = 5MB
)
LOG ON
(
    NAME = Bakery_log1,
    FILENAME = 'C:\SQLData\Bakery_log1.ldf',
    SIZE = 5MB,
    MAXSIZE = 50MB,
    FILEGROWTH = 2MB
),
(
    NAME = Bakery_log2,
    FILENAME = 'C:\SQLData\Bakery_log2.ldf',
    SIZE = 5MB,
    MAXSIZE = 50MB,
    FILEGROWTH = 2MB
);
GO
