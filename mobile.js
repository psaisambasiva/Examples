{  
   "requests":{  
      "event":"{\"key\":\"event\",\"timezone\":\"Asia/Kolkata\",\"contentType\":\"EVENT\",\"untilTime\":1512239399999,\"sinceTime\":1509215400000,\"sorts\":[{\"key\":\"START_DATE\",\"order\":\"ASC\"}],\"withFacets\":false,\"page\":{\"page\":0,\"size\":1000},\"includeRecurrences\":true}",
      "spr_task":"{\"key\":\"spr_task\",\"timezone\":\"Asia/Kolkata\",\"contentType\":\"SPR_TASK\",\"sorts\":[{\"key\":\"DUE_DATE\",\"order\":\"ASC\"}],\"filters\":[{\"field\":\"ASSET_CLASS\",\"fieldType\":\"filter\",\"filterType\":\"IN\",\"values\":[\"PROFILE\",\"UNIVERSAL_MESSAGE\"]},{\"field\":\"TASK_TYPE\",\"fieldType\":\"filter\",\"filterType\":\"IN\",\"values\":[\"taskType\"]}],\"withFacets\":false,\"page\":{\"page\":0,\"size\":1000},\"createdOrAssignedTasks\":true,\"augmentAssets\":true,\"sinceDueDate\":1509215400000,\"untilDueDate\":1512239399999}",
      "post":"{\"key\":\"post\",\"timezone\":\"Asia/Kolkata\",\"contentType\":\"POST\",\"sinceScheduledTime\":1509215400000,\"untilScheduledTime\":1512239399999,\"withFacets\":false,\"withCompleteObjects\":true,\"filters\":[],\"groupBys\":[{\"key\":\"SCHEDULE_DATE_30\",\"field\":\"SCHEDULE_DATE\",\"groupType\":\"DATE_HISTOGRAM\",\"details\":{\"interval\":\"1d\"},\"projections\":[{\"key\":\"ID_31\",\"measurement\":\"ID\",\"aggregateFunction\":\"TOP_HITS\",\"details\":{\"hits\":4,\"sortKey\":\"SCHEDULE_DATE\",\"sortOrder\":\"ASC\"}}]}]}"
   }
}
