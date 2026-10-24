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

--first three tables 

USE BakeryManagement;
GO

CREATE TABLE Suppliers (
    SupplierID    INT IDENTITY(1,1) PRIMARY KEY,
    SupplierName  NVARCHAR(100) NOT NULL,
    ContactPerson NVARCHAR(100),
    Phone         NVARCHAR(20),
    Email         NVARCHAR(100),
    Address       NVARCHAR(200)
);

CREATE TABLE Ingredients (
    IngredientID   INT IDENTITY(1,1) PRIMARY KEY,
    SupplierID     INT NOT NULL,
    IngredientName NVARCHAR(100) NOT NULL,
    Unit           NVARCHAR(20)  NOT NULL,
    UnitPrice      DECIMAL(10,2) NOT NULL,
    StockQuantity  DECIMAL(10,2) NOT NULL DEFAULT 0,
    MinimumStock   DECIMAL(10,2) NOT NULL DEFAULT 0,
    CONSTRAINT FK_Ingredients_Suppliers
        FOREIGN KEY (SupplierID) REFERENCES Suppliers(SupplierID)
);

CREATE TABLE Products (
    ProductID     INT IDENTITY(1,1) PRIMARY KEY,
    ProductName   NVARCHAR(100) NOT NULL,
    Description   NVARCHAR(300),
    Price         DECIMAL(10,2) NOT NULL,
    StockQuantity INT NOT NULL DEFAULT 0,
    Category      NVARCHAR(50)
);



