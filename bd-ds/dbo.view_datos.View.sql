USE [desarrollo_seguro]
GO
/****** Object:  View [dbo].[view_datos]    Script Date: 13/12/2021 01:02:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[view_datos] AS
SELECT Clientnum, Attrition_Flag, Customer_Age, Gender, Income_Category_Masked
FROM datos;
GO
