USE [desarrollo_seguro]
GO
/****** Object:  Table [dbo].[datos]    Script Date: 13/12/2021 01:02:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[datos](
	[Clientnum] [int] NOT NULL,
	[Attrition_Flag] [nvarchar](50) NOT NULL,
	[Customer_Age] [int] NOT NULL,
	[Gender] [nvarchar](1) NOT NULL,
	[Dependent_Count] [int] NOT NULL,
	[Education_Level] [nvarchar](50) NOT NULL,
	[Marital_Status] [nvarchar](50) NOT NULL,
	[Income_Category] [nvarchar](50) NOT NULL,
	[Income_Category_Masked] [nvarchar](50) MASKED WITH (FUNCTION = 'default()') NULL,
	[Card_Category] [nvarchar](50) NOT NULL,
	[Months_On_Book] [int] NOT NULL,
	[Total_Relationship_Count] [int] NOT NULL,
	[Months_Inactive_12_Mon] [int] NOT NULL,
	[Contacts_Count_12_Mon] [int] NOT NULL,
	[Credit_Limit] [decimal](18, 2) NOT NULL,
	[Total_Revolving_Bal] [decimal](18, 2) NOT NULL,
	[Avg_Open_To_Buy] [decimal](18, 2) NOT NULL,
	[Total_Amt_Chng_Q4_Q1] [decimal](18, 4) NOT NULL,
	[Total_Trans_Amt] [int] NOT NULL,
	[Total_Trans_Ct] [int] NOT NULL,
	[Total_Ct_Chng_Q4_Q1] [decimal](18, 4) NOT NULL,
	[Avg_Utilization_Ratio] [decimal](18, 4) NOT NULL,
	[Naive_Bayes_Mon_1] [decimal](18, 8) NOT NULL,
	[Naive_Bayes_Mon_2] [decimal](18, 8) NOT NULL,
 CONSTRAINT [PK_datos] PRIMARY KEY CLUSTERED 
(
	[Clientnum] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
