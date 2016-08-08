var jsonData = { "Variables" : {
      "SALESFLASH" : [
  {
    "name": "vSC_date_CalendarYearField",
    "value": "=IF(vSC_DateType='INSERT', 'Insert_CalendarYear' ,  \n IF(vSC_DateType='POSTING',  'Posting_CalendarYear', 'Create_CalendarYear'))",
    "description": "This variable will be used in the CalendarYear list box and will change the field based on the value in the vSC_DateType field",
    "notes": "Selection Criteria Tab",
    "group": "Dynamic Date Selection",
    "locked": true
  },
  {
    "name": "vSC_date_FiscalYearField",
    "value": "=IF(vSC_DateType='INSERT', 'Insert_FiscalYear' ,  \n IF(vSC_DateType='POSTING',  'Posting_FiscalYear', 'Create_FiscalYear'))",
    "description": "This variable will be used in the Fiscal Year list box and will change the field based on the value in the vSC_DateType field",
    "notes": "Selection Criteria Tab",
    "group": "Dynamic Date Selection",
    "locked": true
  },
  {
    "name": "vSC_date_QuarterField",
    "value": "=IF(vSC_DateType='INSERT', 'Insert_QuarterCalendarText' ,  \n IF(vSC_DateType='POSTING',  'Posting_QuarterCalendarText', 'Create_QuarterCalendarText'))",
    "description": "This variable will be used in the Quarter list box and will change the field based on the value in the vSC_DateType field",
    "notes": "Selection Criteria Tab",
    "group": "Dynamic Date Selection",
    "locked": true
  },
  {
    "name": "vSC_date_PeriodField",
    "value": "=IF(vSC_DateType='INSERT', 'Insert_PeriodOfYearNumber' ,  \n IF(vSC_DateType='POSTING',  'Posting_PeriodOfYearNumber', 'Create_PeriodOfYearNumber'))",
    "description": "This variable will be used in the Period list box and will change the field based on the value in the vSC_DateType field",
    "notes": "Selection Criteria Tab",
    "group": "Dynamic Date Selection",
    "locked": true
  },
  {
    "name": "vSC_date_MonthField",
    "value": "=IF(vSC_DateType='INSERT', 'Insert_Month' ,  \n IF(vSC_DateType='POSTING',  'Posting_Month', 'Create_Month'))",
    "description": "This variable will be used in the Month list box and will change the field based on the value in the vSC_DateType field",
    "notes": "Selection Criteria Tab",
    "group": "Dynamic Date Selection",
    "locked": true
  },
  {
    "name": "vSC_date_DayOfMonthField",
    "value": "=IF(vSC_DateType='INSERT', 'Insert_DayOfMonth' ,  \n IF(vSC_DateType='POSTING',  'Posting_DayOfMonth', 'Create_DayOfMonth'))",
    "description": "This variable will be used in the Day of Month list box and will change the field based on the value in the vSC_DateType field",
    "notes": "Selection Criteria Tab",
    "group": "Dynamic Date Selection",
    "locked": true
  },
  {
    "name": "vSC_date_CalendarDateField",
    "value": "=IF(vSC_DateType='INSERT', 'InsertCalendarDate' ,  \n IF(vSC_DateType='POSTING',  'PostingCalendarDate', 'CreateCalendarDate'))",
    "description": "This variable will be used in the CalendarDate list box and will change the field based on the value in the vSC_DateType field",
    "notes": "Selection Criteria Tab",
    "group": "Dynamic Date Selection",
    "locked": true
  },
  {
    "name": "vSC_date_WeekField",
    "value": "=IF(vSC_DateType='INSERT', 'Insert_WeekOfYear' ,  \n IF(vSC_DateType='POSTING',  'Posting_WeekOfYear', 'Create_WeekOfYear'))",
    "description": "This variable will be used in the Week list box and will change the field based on the value in the vSC_DateType field",
    "notes": "Selection Criteria Tab",
    "group": "Dynamic Date Selection",
    "locked": true
  },
  {
    "name": "vSC_date_DayOfWeekField",
    "value": "=IF(vSC_DateType='INSERT', 'Insert_DayOfWeekText' ,  \n IF(vSC_DateType='POSTING',  'Posting_DayOfWeekText', 'Create_DayOfWeekText'))",
    "description": "This variable will be used in the Day of Week list box and will change the field based on the value in the vSC_DateType field",
    "notes": "Selection Criteria Tab",
    "group": "Dynamic Date Selection",
    "locked": true
  },
  {
    "name": "vSC_date_HolidayField",
    "value": "=IF(vSC_DateType='INSERT', 'Insert_HolidayName' ,  \n IF(vSC_DateType='POSTING',  'Posting_HolidayName', 'Create_HolidayName'))",
    "description": "This variable will be used in the Holiday list box and will change the field based on the value in the vSC_DateType field",
    "notes": "Selection Criteria Tab",
    "group": "Dynamic Date Selection",
    "locked": true
  },
  {
    "name": "vSC_date_FLAG_YTD",
    "value": "=IF(vSC_DateType='INSERT', 'Insert_FLAG_YTD' ,  \n IF(vSC_DateType='POSTING',  'Posting_FLAG_YTD', 'Create_FLAG_YTD'))",
    "description": "This variable will be used to allow users to set the YTD flag for the values in the vSC_DateType field",
    "notes": "Selection Criteria Tab",
    "group": "Dynamic Date Selection",
    "locked": true
  },
  {
    "name": "mod_CY",
    "value": "$(=$(vFiscalOrCalendarYear)) = {$(=$(SelectYear))}",
    "description": "Formula Modifier for Current Year based on the SelectYear variable and taking into account whether user has selected Fiscal Or Calendar Year\nThis variable will be used in the Formulas spreadsheet to modify existing formulas/expression.",
    "notes": "",
    "group": "Formula Modifiers",
    "locked": true
  },
  {
    "name": "mod_PY",
    "value": "$(=$(vFiscalOrCalendarYear)) = {$(=$(SelectYear)-1)}",
    "description": "Formula Modifier for Previous Year based on the SelectYear variable and taking into account whether user has selected Fiscal Or Calendar Year\nThis variable will be used in the Formulas spreadsheet to modify existing formulas/expression.",
    "notes": "",
    "group": "Formula Modifiers",
    "locked": true
  },
  {
    "name": "mod_YTD",
    "value": "$(=Capitalize('$(vSC_DateType)') & '_FLAG_YTD')={TRUE}",
    "description": "Formula Modifier for YTD flag.  Will only return transactions that have the YTD flag set to TRUE.  It will take into account the type of date being used by the user (Insert, Posting or Create)",
    "notes": "",
    "group": "Formula Modifiers",
    "locked": true
  },
  {
    "name": "mod_Prev_YTD",
    "value": "$(=Capitalize('$(vSC_DateType)') & '_FLAG_PreviousYTD')={TRUE}",
    "description": "Formula Modifier for the Previous YTD flag.  Will only return transactions that have the Previous YTD flag set to TRUE.  It will take into account the type of date being used by the user (Insert, Posting or Create)",
    "notes": "",
    "group": "Formula Modifiers",
    "locked": true
  },
  {
    "name": "vinputAccrualStartDate",
    "value": "=Date(CURRENT_PeriodStartDate)",
    "description": "Defines the beginning date for the report",
    "notes": "Finance tab->Accrual/Deferral button",
    "group": "Report-Variables",
    "locked": true
  },
  {
    "name": "vinputAccrualEndDate",
    "value": "=Date(CURRENT_PeriodEndDate)",
    "description": "Defines the ending date for the report",
    "notes": "Finance tab->Accrual/Deferral button",
    "group": "Report-Variables",
    "locked": true
  },
  {
    "name": "vandProd_ProductSet",
    "value": "='SUM({<$(vAndProd_ProductSetAcctOrAdOrder)=' & Concat(Distinct {$} '{\"=COUNT({<ProductName={' & chr(39) & ProductName, chr(39) & '}>} AccountNumber_AdBase)>0\"}*')\n  & chr(39) & '}>} $(vAndProd_ProductSetAcctOrAdOrder))>0\"}$(vAndProd_ProductClear)>} $(NetRevenue))'",
    "description": "",
    "notes": "",
    "group": "Report-Variables",
    "locked": true
  },
  {
    "name": "vAndProd_ShowExpression",
    "value": "=IF(vAndProd_ShowExpression=1,0,1)",
    "description": "",
    "notes": "",
    "group": "Report-Variables",
    "locked": true
  },
  {
    "name": "vAndProd_ShowHelp",
    "value": "=IF(vShowHelp='ANDHelp', '', 'ANDHelp')",
    "description": "",
    "notes": "",
    "group": "Report-Variables",
    "locked": true
  },
  {
    "name": "vAndProd_ProductSetAcctOrAdOrder",
    "value": "AccountNumber_AdBase",
    "description": "",
    "notes": "",
    "group": "Report-Variables",
    "locked": true
  },
  {
    "name": "vAndProd_ProductClear",
    "value": "=null()",
    "description": "",
    "notes": "",
    "group": "Report-Variables",
    "locked": true
  },
  {
    "name": "vChurnPrevYear",
    "value": "IF(IsNull(AGGR(SUM({$<$(=$(vFiscalOrCalendarYear))={$(=$(SelectYear)-1)}>} $(NetRevenue)), AccountNumber_AdBase)),0,AGGR(SUM({$<$(=$(vFiscalOrCalendarYear))={$(=$(SelectYear)-1)}>} $(NetRevenue)), AccountNumber_AdBase))",
    "description": "AGGR function that returns revenue for customers in Previous Year",
    "notes": "Advertising tab -> Churn",
    "group": "Report-Variables",
    "locked": true
  },
  {
    "name": "vChurnCurrYear",
    "value": "IF(IsNull(AGGR(SUM({$<$(=$(vFiscalOrCalendarYear))={$(SelectYear)}>} $(NetRevenue)), AccountNumber_AdBase)),0,AGGR(SUM({$<$(=$(vFiscalOrCalendarYear))={$(SelectYear)}>} $(NetRevenue)), AccountNumber_AdBase))",
    "description": "AGGR function that returns revenue for customers in Current Year",
    "notes": "Advertising tab -> Churn",
    "group": "Report-Variables",
    "locked": true
  },
  {
    "name": "vChurnType",
    "value": "YOY",
    "description": "If MONTH, then show Churn by Month chart; if YOY, show YOY Churn",
    "notes": "Advertising tab -> Churn",
    "group": "Report-Variables",
    "locked": true
  },
  {
    "name": "vChurnDynCurrMonth",
    "value": "IF(IsNull(AGGR(SUM({$<$(=$(vChurnDynMonthField))={$(=NUM(Mid('$(SelectMonthYear)',5,2)))},$(=$(vFiscalOrCalendarYear))={$(=Mid('$(SelectMonthYear)',1,4))}>} $(NetRevenue)), AccountNumber_AdBase)),\n 0,\n  AGGR(SUM({$<$(=$(vChurnDynMonthField))={$(=NUM(Mid('$(SelectMonthYear)',5,2)))},$(=$(vFiscalOrCalendarYear))={$(=Mid('$(SelectMonthYear)',1,4))}>} $(NetRevenue)), AccountNumber_AdBase))",
    "description": "Used for Monthly Churn calculations (this is the current Month formula)",
    "notes": "",
    "group": "Report-Variables",
    "locked": true
  },
  {
    "name": "vChurnDynPrevMonth",
    "value": "IF(IsNull(AGGR(SUM({$<$(=$(vChurnDynMonthField))={$(=NUM(Mid('$(SelectMonthYearPrev)',5,2)))},$(=$(vFiscalOrCalendarYear))={$(=Mid('$(SelectMonthYearPrev)',1,4))}>} $(NetRevenue)), AccountNumber_AdBase)),\n 0,\n  AGGR(SUM({$<$(=$(vChurnDynMonthField))={$(=NUM(Mid('$(SelectMonthYearPrev)',5,2)))},$(=$(vFiscalOrCalendarYear))={$(=Mid('$(SelectMonthYearPrev)',1,4))}>} $(NetRevenue)), AccountNumber_AdBase))",
    "description": "Used for Monthly Churn calculations (this is the previous Month formula)",
    "notes": "Advertising tab -> Churn (Monthly Churn)",
    "group": "Report-Variables",
    "locked": true
  },
  {
    "name": "vChurnDynMonthField",
    "value": "Capitalize('$(vSC_DateType)') & '_MonthOfYearNumber'",
    "description": "Dynamic field for the Month field in the monthly churn chart",
    "notes": "Advertising tab -> Churn (Monthly Churn)",
    "group": "Report-Variables",
    "locked": true
  },
  {
    "name": "vShowTotals",
    "value": 0,
    "description": "Flag to be used when using code to show and hide totals in a pivot table.  In base version this is only in the Preprint report on the Advertising tab as an example.",
    "notes": "",
    "group": "Report-Variables",
    "locked": true
  },
  {
    "name": "vsysCurrentSelections",
    "value": "=if(vsysShowCS = 1, '  Click Here To Hide', if(isnull(GetCurrentSelections()), '  Nothing selected', GetCurrentSelections(' | ', ': ', ',',0)))",
    "description": "Used in the DisplayCurrent Selections boxes.",
    "notes": "",
    "group": "System-CurrentSelections",
    "locked": true
  },
  {
    "name": "vsysShowCS",
    "value": 0,
    "description": "Flag to determine if we should show or hide a current selections object",
    "notes": "",
    "group": "System-CurrentSelections",
    "locked": true
  },
  {
    "name": "vsysFormulaCreatorTemp",
    "value": "---",
    "description": "A variable that will hold the formula being created by Formula Creator.",
    "notes": "",
    "group": "System-FormulaCreator",
    "locked": true
  },
  {
    "name": "vLoadOldAcctNums",
    "value": 0,
    "description": "Flag to determine if we should load old accountnumbers",
    "notes": "Main tab",
    "group": "System-Load Switches",
    "locked": true
  },
  {
    "name": "vReloadVariables",
    "value": 0,
    "description": "Used in SOURCE_ to determine if this spreadsheet should be reloaded.  Turned on and off in the application NOT here.",
    "notes": "Main tab",
    "group": "System-Load Switches",
    "locked": true
  },
  {
    "name": "vLoadCRM",
    "value": 0,
    "description": "Used in SOURCE_ to determine if CRM data will be loaded.  Turned on and off in the application NOT here.",
    "notes": "Main tab",
    "group": "System-Load Switches",
    "locked": true
  },
  {
    "name": "vLoadPRPSchedule",
    "value": 0,
    "description": "Used in SOURCE_ to determine if Preprint schedule information from Core will be loaded.  Turned on and off in the application NOT here.",
    "notes": "Main tab",
    "group": "System-Load Switches",
    "locked": true
  },
  {
    "name": "vLoadBudget",
    "value": 0,
    "description": "Used in SOURCE_ to determine if Budget spreadsheet information will be loaded.  Turned on and off in the application NOT here.",
    "notes": "Main tab",
    "group": "System-Load Switches",
    "locked": true
  },
  {
    "name": "vLoadCustomScripts",
    "value": 0,
    "description": "Used in SOURCE_ to determine if Custom Scripts should be loaded.  If true, Source file will look in CustomScripts\\SalesFlash\\*.qvs",
    "notes": "Main tab",
    "group": "System-Load Switches",
    "locked": true
  },
  {
    "name": "vExcludeGLs",
    "value": 0,
    "description": "Used in SOURCE_ to determine if ExcludeGLs information should be read and processed from the SystemSheet.xls -> GLExcludeList",
    "notes": "Main tab",
    "group": "System-Load Switches",
    "locked": true
  },
  {
    "name": "vLoadAdvRevenue",
    "value": 0,
    "description": "Used in SOURCE_ to determine if we are to load revenue from the fctInsertSummary and Detail tables. Can increase load times significantly",
    "notes": "Main tab",
    "group": "System-Load Switches",
    "locked": true
  },
  {
    "name": "vShowHelp",
    "value": "",
    "description": "Used to show and hide help text boxes.",
    "notes": "",
    "group": "System-Variables",
    "locked": true
  },
  {
    "name": "vsysButtonColorOn",
    "value": "ARGB(100,209,239,180)",
    "description": "On sheets with a button bar down the side, this will be the color of the button selected.",
    "notes": "",
    "group": "System-Variables",
    "locked": true
  },
  {
    "name": "vsysButtonColorOff",
    "value": "ARGB(255,255,255,255)",
    "description": "On sheets with a button bar down the side, this will be the color of the buttons NOT selected.",
    "notes": "",
    "group": "System-Variables",
    "locked": true
  },
  {
    "name": "vLastActivityDate",
    "value": "DATE(AGGR(MAX({1} InsertCalendarDate),AccountNumber_AdBase))",
    "description": "Return the most recent (could even be in the future depending on expression) insertion date for every customer.  \nThis expression will return the last insert date for customers and could be in the future:\n=DATE(AGGR(MAX({1} InsertCalendarDate),AccountNumber_AdBase))\nYou can also limit the dates that the expression looks for the last insertion.  The expression below will search for the last insert date before one month ago Today.\n=DATE(AGGR(MAX({1} InsertCalendarDate),AccountNumber_AdBase))",
    "notes": "Advertising tab -> Inactive customers",
    "group": "System-Variables",
    "locked": true
  },
  {
    "name": "vOSUser",
    "value": "=OSUser()",
    "description": "User logged into the application.",
    "notes": "",
    "group": "System-Variables",
    "locked": true
  },
  {
    "name": "SelectYear",
    "value": "=[YearComparison%]",
    "description": "Used for Year over Year caclulations",
    "notes": "",
    "group": "System-Variables",
    "locked": true
  },
  {
    "name": "vFiscalOrCalendarYear",
    "value": "Capitalize('$(vSC_DateType)') & '_CalendarYear'",
    "description": "Allows the user to do YOY comparisons based on the Fiscal or Calendar Year.  Will be either Posting_CalendarYear or Insert_CalendarYear.\nSample Dimension Usage:\n=$(=$(vFiscalOrCalendarYear))\nSample Expression Usage:\nSUM( {<$(=$(vFiscalOrCalendarYear)) = {$(=$(SelectYear))}>} $(NetRevenue))",
    "notes": "",
    "group": "System-Variables",
    "locked": true
  },
  {
    "name": "vFiscalOrCalendarYearLabel",
    "value": "Calendar",
    "description": "Label for the List boxes, Dimensions and Expressions that use the Dynamic Year and month/period fields",
    "notes": "",
    "group": "System-Variables",
    "locked": true
  },
  {
    "name": "vFiscalOrCalendarMonthPeriod",
    "value": "Capitalize('$(vSC_DateType)') & '_Month'",
    "description": "Dynamic field that can be used in Dimensions.  This will allow the user to select whether they see Insert/posting/create and Calendar(month) or Fiscal(period).\n=$(=$(vFiscalOrCalendarMonthPeriod))",
    "notes": "",
    "group": "System-Variables",
    "locked": true
  },
  {
    "name": "vFiscalOrCalendarMonthPeriodLabel",
    "value": "Month",
    "description": "Label to be used for the charts that use this Dynamic Dimension",
    "notes": "",
    "group": "System-Variables",
    "locked": true
  },
  {
    "name": "vFiscalOrCalendarPrevYTD",
    "value": "",
    "description": "Sets the YTD Flag based on the Date settings - Controlled by YTDSwitch Macro\nCapitalize('$(vSC_DateType)') & '_FLAG_PreviousYTD'",
    "notes": "",
    "group": "System-Variables",
    "locked": true
  },
  {
    "name": "vFiscalOrCalendarYTD",
    "value": "",
    "description": "Sets the YTD Flag based on the Date settings - Controlled by YTDSwitch Macro\nCapitalize('$(vSC_DateType)') & '_FLAG_YTD'",
    "notes": "",
    "group": "System-Variables",
    "locked": true
  },
  {
    "name": "vsysShowAdvancedSheets",
    "value": 0,
    "description": "When true, shows the Formulas, Formula Creator and Tables and Fields sheets.",
    "notes": "",
    "group": "System-Variables",
    "locked": true
  },
  {
    "name": "vbtnsFinance",
    "value": 1,
    "description": "Controls which reports are showing on the Finance sheet",
    "notes": "Finance Tab",
    "group": "Button Lists",
    "locked": false
  },
  {
    "name": "vbtnsAdvertising",
    "value": 1,
    "description": "Controls which reports are showing on the Advertising sheet",
    "notes": "Advertising Tab",
    "group": "Button Lists",
    "locked": false
  },
  {
    "name": "vbtnsReference",
    "value": 1,
    "description": "Controls which reports are showing on the Reference sheet",
    "notes": "Reference Tab",
    "group": "Button Lists",
    "locked": false
  },
  {
    "name": "vbtnsCRM",
    "value": 1,
    "description": "Controls which reports are showing on the CRM sheet",
    "notes": "CRM Tab",
    "group": "Button Lists",
    "locked": false
  },
  {
    "name": "vTab",
    "value": "DateActive",
    "description": "Used on Selection Criteria tab to determine which side tab is active.  \nOPTIONS: DateActive, ProductActive, SalesActive or OtherActive",
    "notes": "Selection Criteria tab",
    "group": "Button Lists",
    "locked": false
  },
  {
    "name": "vQSTab",
    "value": "DateActive",
    "description": "Used on all reporting tabs to determine which Quick Selection Ribbon tab is active. \nOPTIONS: DateActive, ProductActive, SalesActive, GLActive or OtherActive",
    "notes": "Quick Select ribbon",
    "group": "Button Lists",
    "locked": false
  },
  {
    "name": "vSC_DateType",
    "value": "POSTING",
    "description": "Holds either INSERT, POSTING or CREATE.  Used to dynamically change Date List boxes.",
    "notes": "Selection Criteria Tab",
    "group": "Dynamic Date Selection",
    "locked": false
  },
  {
    "name": "vFiscalOrCalendarFlag",
    "value": 0,
    "description": "0=Calendar, 1=Fiscal",
    "notes": "",
    "group": "Dynamic Date Selection",
    "locked": false
  },
  {
    "name": "vGL_BUCKET_1",
    "value": "Revenue Category",
    "description": "The Expression here will be the new field name for use in SalesFlash.qvw",
    "notes": "",
    "group": "GL Buckets",
    "locked": false
  },
  {
    "name": "vGL_BUCKET_2",
    "value": "Revenue Product",
    "description": "The Expression here will be the new field name for use in SalesFlash.qvw",
    "notes": "",
    "group": "GL Buckets",
    "locked": false
  },
  {
    "name": "vGL_BUCKET_3",
    "value": "vGL_BUCKET_3",
    "description": "The Expression here will be the new field name for use in SalesFlash.qvw - You do NOT need to fill in all of these",
    "notes": "",
    "group": "GL Buckets",
    "locked": false
  },
  {
    "name": "vGL_BUCKET_4",
    "value": "vGL_BUCKET_4",
    "description": "The Expression here will be the new field name for use in SalesFlash.qvw - You do NOT need to fill in all of these",
    "notes": "",
    "group": "GL Buckets",
    "locked": false
  },
  {
    "name": "vGL_BUCKET_5",
    "value": "vGL_BUCKET_5",
    "description": "The Expression here will be the new field name for use in SalesFlash.qvw - You do NOT need to fill in all of these",
    "notes": "",
    "group": "GL Buckets",
    "locked": false
  },
  {
    "name": "vGL_BUCKET_6",
    "value": "vGL_BUCKET_6",
    "description": "The Expression here will be the new field name for use in SalesFlash.qvw - You do NOT need to fill in all of these",
    "notes": "",
    "group": "GL Buckets",
    "locked": false
  },
  {
    "name": "vinputTopNNN",
    "value": 25,
    "description": "User entered, number of top/bottom performers to show.",
    "notes": "Advertising tab -> Winners/Losers button",
    "group": "InputBox",
    "locked": false
  },
  {
    "name": "vInactiveDays",
    "value": 30,
    "description": "Used along with the vLastActivityDate to determine if a customer should be returned on the \"inactive customer\" report.  This will be the initial number of Inactive Days shown.",
    "notes": "Advertising tab -> Inactive customers",
    "group": "InputBox",
    "locked": false
  },
  {
    "name": "vsheet_Finance",
    "value": 1,
    "description": "1 = Show Sheet; 0 = Hide Sheet",
    "notes": "",
    "group": "Sheet Visability",
    "locked": false
  },
  {
    "name": "vsheet_Advertising",
    "value": 1,
    "description": "1 = Show Sheet; 0 = Hide Sheet",
    "notes": "",
    "group": "Sheet Visability",
    "locked": false
  },
  {
    "name": "vsheet_RevCompare",
    "value": 1,
    "description": "1 = Show Sheet; 0 = Hide Sheet",
    "notes": "",
    "group": "Sheet Visability",
    "locked": false
  },
  {
    "name": "vsheet_Budget",
    "value": 1,
    "description": "1 = Show Sheet; 0 = Hide Sheet",
    "notes": "",
    "group": "Sheet Visability",
    "locked": false
  },
  {
    "name": "vShowAdvancedSheets",
    "value": 0,
    "description": "Shows/hides Reference Charts, Tables & Fields, Formulas, Formula Creator tabs",
    "notes": "Main tab",
    "group": "Sheet Visability",
    "locked": false
  },
  {
    "name": "vDaysInPreviousYear",
    "value": "Date((Today())-(MakeDate(Year(Today())-1,12,31)-MakeDate(Year(Today())-1,1)))",
    "description": "Returns the number of days in the CurrentYear -1 (Previous Year)",
    "notes": "",
    "group": "Report-Variables",
    "locked": false
  },
  {
    "name": "vGaugeFillToSegment1",
    "value": "RGB(110,175,75)",
    "description": "First segment of Gauge from Zero to Lower bound of Segment2.",
    "notes": "Gauges",
    "group": "System-Colors",
    "locked": false
  },
  {
    "name": "vGaugeFillToSegment2",
    "value": "RGB(191,191,191)",
    "description": "Second segment of Gauge from Lower bound of Segment2 to end.",
    "notes": "Gauges",
    "group": "System-Colors",
    "locked": false
  },
  {
    "name": "vGaugeFillToOverSegment",
    "value": "RGB(80,130,50)",
    "description": "This is the color of the whole gauge if the expression exceeds the bounds.  If gauge is from 0 to 100 and we have 142, this color would show.",
    "notes": "Gauges",
    "group": "System-Colors",
    "locked": false
  }
],
  "COMMON" : [
      {
        "name": "vsysButtonColorOn",
        "value": "ARGB(100,209,239,180)",
        "description": "On sheets with a button bar down the side, this will be the color of the button selected.",
        "group" : "System",
        "notes" : "",
        "locked" : true
      },
      {
        "name": "vsysButtonColorOff",
        "value": "ARGB(100,209,239,180)",
        "description": "On sheets with a button bar down the side, this will be the color of the button NOT selected.",
        "group" : "System",
        "notes" : "",
        "locked" : true
      }
    ],
  "ADVERTISINGANALYTIX" : [
  {
    "name": "vSC_date_CalendarYearField",
    "value": "=IF(vSC_DateType='INSERT', 'Insert_CalendarYear' ,  \n IF(vSC_DateType='POSTING',  'Posting_CalendarYear', 'Create_CalendarYear'))",
    "description": "This variable will be used in the CalendarYear list box and will change the field based on the value in the vSC_DateType field",
    "notes": "Selection Criteria Tab",
    "group": "Dynamic Date Selection",
    "locked": true
  },
  {
    "name": "vSC_date_FiscalYearField",
    "value": "=IF(vSC_DateType='INSERT', 'Insert_FiscalYear' ,  \n IF(vSC_DateType='POSTING',  'Posting_FiscalYear', 'Create_FiscalYear'))",
    "description": "This variable will be used in the Fiscal Year list box and will change the field based on the value in the vSC_DateType field",
    "notes": "Selection Criteria Tab",
    "group": "Dynamic Date Selection",
    "locked": true
  },
  {
    "name": "vSC_date_QuarterField",
    "value": "=IF(vSC_DateType='INSERT', 'Insert_QuarterCalendarText' ,  \n IF(vSC_DateType='POSTING',  'Posting_QuarterCalendarText', 'Create_QuarterCalendarText'))",
    "description": "This variable will be used in the Quarter list box and will change the field based on the value in the vSC_DateType field",
    "notes": "Selection Criteria Tab",
    "group": "Dynamic Date Selection",
    "locked": true
  },
  {
    "name": "vSC_date_PeriodField",
    "value": "=IF(vSC_DateType='INSERT', 'Insert_PeriodOfYearNumber' ,  \n IF(vSC_DateType='POSTING',  'Posting_PeriodOfYearNumber', 'Create_PeriodOfYearNumber'))",
    "description": "This variable will be used in the Period list box and will change the field based on the value in the vSC_DateType field",
    "notes": "Selection Criteria Tab",
    "group": "Dynamic Date Selection",
    "locked": true
  },
  {
    "name": "vSC_date_MonthField",
    "value": "=IF(vSC_DateType='INSERT', 'Insert_Month' ,  \n IF(vSC_DateType='POSTING',  'Posting_Month', 'Create_Month'))",
    "description": "This variable will be used in the Month list box and will change the field based on the value in the vSC_DateType field",
    "notes": "Selection Criteria Tab",
    "group": "Dynamic Date Selection",
    "locked": true
  },
  {
    "name": "vSC_date_DayOfMonthField",
    "value": "=IF(vSC_DateType='INSERT', 'Insert_DayOfMonth' ,  \n IF(vSC_DateType='POSTING',  'Posting_DayOfMonth', 'Create_DayOfMonth'))",
    "description": "This variable will be used in the Day of Month list box and will change the field based on the value in the vSC_DateType field",
    "notes": "Selection Criteria Tab",
    "group": "Dynamic Date Selection",
    "locked": true
  },
  {
    "name": "vSC_date_CalendarDateField",
    "value": "=IF(vSC_DateType='INSERT', 'InsertCalendarDate' ,  \n IF(vSC_DateType='POSTING',  'PostingCalendarDate', 'CreateCalendarDate'))",
    "description": "This variable will be used in the CalendarDate list box and will change the field based on the value in the vSC_DateType field",
    "notes": "Selection Criteria Tab",
    "group": "Dynamic Date Selection",
    "locked": true
  },
  {
    "name": "vSC_date_WeekField",
    "value": "=IF(vSC_DateType='INSERT', 'Insert_WeekOfYear' ,  \n IF(vSC_DateType='POSTING',  'Posting_WeekOfYear', 'Create_WeekOfYear'))",
    "description": "This variable will be used in the Week list box and will change the field based on the value in the vSC_DateType field",
    "notes": "Selection Criteria Tab",
    "group": "Dynamic Date Selection",
    "locked": true
  },
  {
    "name": "vSC_date_DayOfWeekField",
    "value": "=IF(vSC_DateType='INSERT', 'Insert_DayOfWeekText' ,  \n IF(vSC_DateType='POSTING',  'Posting_DayOfWeekText', 'Create_DayOfWeekText'))",
    "description": "This variable will be used in the Day of Week list box and will change the field based on the value in the vSC_DateType field",
    "notes": "Selection Criteria Tab",
    "group": "Dynamic Date Selection",
    "locked": true
  },
  {
    "name": "vSC_date_HolidayField",
    "value": "=IF(vSC_DateType='INSERT', 'Insert_HolidayName' ,  \n IF(vSC_DateType='POSTING',  'Posting_HolidayName', 'Create_HolidayName'))",
    "description": "This variable will be used in the Holiday list box and will change the field based on the value in the vSC_DateType field",
    "notes": "Selection Criteria Tab",
    "group": "Dynamic Date Selection",
    "locked": true
  },
  {
    "name": "vsysCurrentSelections",
    "value": "=if(vsysShowCS = 1, '  Click Here To Hide', if(isnull(GetCurrentSelections()), '  Nothing selected', GetCurrentSelections(' | ', ': ', ',',0)))",
    "description": "Used in the DisplayCurrent Selections boxes.",
    "notes": "",
    "group": "System-CurrentSelections",
    "locked": true
  },
  {
    "name": "vsysShowCS",
    "value": 0,
    "description": "Flag to determine if we should show or hide a current selections object",
    "notes": "",
    "group": "System-CurrentSelections",
    "locked": true
  },
  {
    "name": "vsysFormulaCreatorTemp",
    "value": "---",
    "description": "A variable that will hold the formula being created by Formula Creator.",
    "notes": "",
    "group": "System-FormulaCreator",
    "locked": true
  },
  {
    "name": "vReloadVariables",
    "value": 0,
    "description": "",
    "notes": "Main tab",
    "group": "System-Load Switches",
    "locked": true
  },
  {
    "name": "vLoadCRM",
    "value": 0,
    "description": "",
    "notes": "",
    "group": "System-Load Switches",
    "locked": true
  },
  {
    "name": "vLoadOldAcctNums",
    "value": 0,
    "description": "",
    "notes": "",
    "group": "System-Load Switches",
    "locked": true
  },
  {
    "name": "vLoadPRS",
    "value": 0,
    "description": "",
    "notes": "",
    "group": "System-Load Switches",
    "locked": true
  },
  {
    "name": "vLoadCustomScripts",
    "value": 0,
    "description": "Used in SOURCE_ to determine if Custom Scripts should be loaded.  If true, Source file will look in CustomScripts\\SalesFlash\\*.qvs",
    "notes": "Main tab",
    "group": "System-Load Switches",
    "locked": true
  },
  {
    "name": "vShowHelp",
    "value": "",
    "description": "",
    "notes": "",
    "group": "System-Variables",
    "locked": true
  },
  {
    "name": "SelectYear",
    "value": "=[YearComparison%]",
    "description": "Used for Year over Year caclulations",
    "notes": "",
    "group": "System-Variables",
    "locked": true
  },
  {
    "name": "vFiscalOrCalendarYear",
    "value": "Capitalize('$(vSC_DateType)') & '_CalendarYear'",
    "description": "Allows the user to do YOY comparisons based on the Fiscal or Calendar Year.  Will be either Posting_CalendarYear or Insert_CalendarYear.\nSample Dimension Usage:\n=$(=$(vFiscalOrCalendarYear))\nSample Expression Usage:\nSUM( {<$(=$(vFiscalOrCalendarYear)) = {$(=$(SelectYear))}>} $(NetRevenue))",
    "notes": "",
    "group": "System-Variables",
    "locked": true
  },
  {
    "name": "vFiscalOrCalendarYearLabel",
    "value": "Calendar",
    "description": "Label for the List boxes, Dimensions and Expressions that use the Dynamic Year and month/period fields",
    "notes": "",
    "group": "System-Variables",
    "locked": true
  },
  {
    "name": "vFiscalOrCalendarMonthPeriod",
    "value": "Capitalize('$(vSC_DateType)') & '_Month'",
    "description": "Dynamic field that can be used in Dimensions.  This will allow the user to select whether they see Insert/posting/create and Calendar(month) or Fiscal(period).\n=$(=$(vFiscalOrCalendarMonthPeriod))",
    "notes": "",
    "group": "System-Variables",
    "locked": true
  },
  {
    "name": "vFiscalOrCalendarMonthPeriodLabel",
    "value": "Month",
    "description": "Label to be used for the charts that use this Dynamic Dimension",
    "notes": "",
    "group": "System-Variables",
    "locked": true
  },
  {
    "name": "vFiscalOrCalendarYTD",
    "value": "",
    "description": "Sets the YTD Flag based on the Date settings - Controlled by YTDSwitch Macro\nCapitalize('$(vSC_DateType)') & '_FLAG_YTD'",
    "notes": "",
    "group": "System-Variables",
    "locked": true
  },
  {
    "name": "vsysButtonColorOn",
    "value": "ARGB(100,209,239,180)",
    "description": "On sheets with a button bar down the side, this will be the color of the button selected.",
    "notes": "",
    "group": "System-Variables",
    "locked": true
  },
  {
    "name": "vsysButtonColorOff",
    "value": "ARGB(255,255,255,255)",
    "description": "On sheets with a button bar down the side, this will be the color of the buttons NOT selected.",
    "notes": "",
    "group": "System-Variables",
    "locked": true
  },
  {
    "name": "vTab",
    "value": "DateActive",
    "description": "",
    "notes": "Selection Criteria tab",
    "group": "Button Lists",
    "locked": false
  },
  {
    "name": "vQSTab",
    "value": "DateActive",
    "description": "",
    "notes": "Quick Select ribbon",
    "group": "Button Lists",
    "locked": false
  },
  {
    "name": "vbtnsOrderInfo",
    "value": 1,
    "description": "Controls which reports are showing on the Order Information tab",
    "notes": "",
    "group": "Button Lists",
    "locked": false
  },
  {
    "name": "vbtnsReference",
    "value": 1,
    "description": "Controls which reports are showing on the Reference sheet",
    "notes": "",
    "group": "Button Lists",
    "locked": false
  },
  {
    "name": "vbtnsMiscReports",
    "value": 1,
    "description": "Controls which reports are showing on the Misc Reports sheet",
    "notes": "",
    "group": "Button Lists",
    "locked": false
  },
  {
    "name": "vbtnsReference",
    "value": 1,
    "description": "Controls which reports are showing on the Reference sheet",
    "notes": "",
    "group": "Button Lists",
    "locked": false
  },
  {
    "name": "vSC_DateType",
    "value": "INSERT",
    "description": "Holds either INSERT, POSTING or CREATE.  Used to dynamically change Date List boxes.",
    "notes": "Selection Criteria Tab",
    "group": "Dynamic Date Selection",
    "locked": false
  },
  {
    "name": "vFiscalOrCalendarFlag",
    "value": 0,
    "description": "0=Calendar, 1=Fiscal",
    "notes": "",
    "group": "Dynamic Date Selection",
    "locked": false
  },
  {
    "name": "vShowAdvancedSheets",
    "value": 0,
    "description": "Shows/hides Reference Charts, Tables & Fields, Formulas, Formula Creator tabs",
    "notes": "Main tab",
    "group": "Sheet Visability",
    "locked": false
  },
  {
    "name": "vOSUser",
    "value": "=OSUser()",
    "description": "",
    "notes": "",
    "group": "System-Variables",
    "locked": false
  }
]
}
};

module.exports = jsonData;