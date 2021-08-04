ShareApp.controller("TaskProfileController", ["$scope", "$http", "$rootScope", "$uibModal", "$q", "$timeout", "SharewebListService", "SharewebCommonFactoryService", "GlobalConstants",
    function ($scope, $http, $rootScope, $uibModal, $q, $timeout, SharewebListService, SharewebCommonFactoryService, GlobalConstants) {
        $scope.baseUrl = GlobalConstants.MAIN_SITE_URL;
        $scope.userId = _spPageContextInfo.userId;
        $scope.newURL = _spPageContextInfo.siteAbsoluteUrl;
        $scope.SubSiteURL = _spPageContextInfo.webAbsoluteUrl;
        var getOrginalsite = SharewebCommonFactoryService.getParameterByName('Site');
        $scope.site = SharewebCommonFactoryService.getOrginalListName(getOrginalsite);
        var sitename = $scope.site.toUpperCase();
        $scope.userIds = [];
        $scope.ListName = "Tasks";
        $scope.orderBy2 = 'Title';
        $scope.OrderByNew = 'Order0';
        var IsPageLoad = true;
        $scope.reverse2 = false;
        $scope.ListNameQuery = SharewebCommonFactoryService.getParameterByName('Site');
        $scope.ApprovedRejectType = SharewebCommonFactoryService.getParameterByName('Type');
        if (!$scope.ListNameQuery) {
            $scope.ListNameQuery = "Master Tasks"
        }
        $scope.Testcasejson = [];
        $scope.Newtimentry = SharewebCommonFactoryService.getParameterByName('IstimeEntry');
        $scope.currentUserId = _spPageContextInfo.userId;
        $scope.isShowApprovalButtons = false;
        $scope.CurrentSiteType = _spPageContextInfo.webServerRelativeUrl.toLowerCase();
        $scope.createComponent = {};
        $scope.orderBy1 = 'Shareweb_x0020_ID';
        $scope.reverse1 = true;
        $scope.orderBy = 'Shareweb_x0020_ID';
        $scope.reverse = true;
        $scope.showtime = false;
        var SiteType = SharewebCommonFactoryService.getParameterByName('Site');
        $scope.SiteType = SharewebCommonFactoryService.getOrginalListName(SiteType);
        $scope.TeamMembers = [{ "__metadata": { "id": "Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(1)", "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(1)", "etag": "\"19\"", "type": "SP.Data.Task_x0020_UsersListItem" }, "FirstUniqueAncestorSecurableObject": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(1)/FirstUniqueAncestorSecurableObject" } }, "RoleAssignments": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(1)/RoleAssignments" } }, "AttachmentFiles": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(1)/AttachmentFiles" } }, "ContentType": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(1)/ContentType" } }, "FieldValuesAsHtml": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(1)/FieldValuesAsHtml" } }, "FieldValuesAsText": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(1)/FieldValuesAsText" } }, "FieldValuesForEdit": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(1)/FieldValuesForEdit" } }, "File": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(1)/File" } }, "Folder": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(1)/Folder" } }, "ParentList": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(1)/ParentList" } }, "FileSystemObjectType": 0, "Id": 1, "ContentTypeId": "0x01006B4194304DEAC34AAEDD2A28EE9349FF", "Title": "Avinash Kumar", "AssingedToUserId": 16, "Item_x0020_Cover": { "__metadata": { "type": "SP.FieldUrlValue" }, "Description": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/PublishingImages/Portraits/portrait_Avinash.jpg", "Url": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/PublishingImages/Portraits/portrait_Avinash.jpg" }, "Status": true, "Role": { "__metadata": { "type": "Collection(Edm.String)" }, "results": ["Deliverable Teams"] }, "UserGroupId": 16, "Suffix": null, "SortOrder": 2, "ParentID1": null, "isDeleted": false, "ItemType": "User", "IsActive": true, "Email": "avinash.kumar@smalsus.com", "Group": null, "Company": "Smalsus", "ID": 1, "Modified": "2020-05-05T13:26:05Z", "Created": "2018-01-04T13:47:22Z", "AuthorId": 10, "EditorId": 46, "OData__UIVersionString": "12.0", "Attachments": false, "GUID": "e1d35258-8293-4ccc-a501-644de33f64fc" }, { "__metadata": { "id": "Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(2)", "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(2)", "etag": "\"18\"", "type": "SP.Data.Task_x0020_UsersListItem" }, "FirstUniqueAncestorSecurableObject": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(2)/FirstUniqueAncestorSecurableObject" } }, "RoleAssignments": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(2)/RoleAssignments" } }, "AttachmentFiles": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(2)/AttachmentFiles" } }, "ContentType": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(2)/ContentType" } }, "FieldValuesAsHtml": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(2)/FieldValuesAsHtml" } }, "FieldValuesAsText": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(2)/FieldValuesAsText" } }, "FieldValuesForEdit": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(2)/FieldValuesForEdit" } }, "File": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(2)/File" } }, "Folder": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(2)/Folder" } }, "ParentList": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(2)/ParentList" } }, "FileSystemObjectType": 0, "Id": 2, "ContentTypeId": "0x01006B4194304DEAC34AAEDD2A28EE9349FF", "Title": "Ranu Trivedi", "AssingedToUserId": 17, "Item_x0020_Cover": { "__metadata": { "type": "SP.FieldUrlValue" }, "Description": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/PublishingImages/Portraits/portrait_Ranu.jpg", "Url": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/PublishingImages/Portraits/portrait_Ranu.jpg" }, "Status": true, "Role": { "__metadata": { "type": "Collection(Edm.String)" }, "results": ["Deliverable Teams"] }, "UserGroupId": 16, "Suffix": null, "SortOrder": 1, "ParentID1": 15, "isDeleted": false, "ItemType": "User", "IsActive": false, "Email": "ranu.trivedi@smalsus.com", "Group": null, "Company": "Smalsus", "ID": 2, "Modified": "2020-03-25T13:14:21Z", "Created": "2018-01-12T12:10:10Z", "AuthorId": 10, "EditorId": 10, "OData__UIVersionString": "12.0", "Attachments": false, "GUID": "c0bce8b4-02ca-4fe5-adc6-98c8d1f52cd3" }, { "__metadata": { "id": "Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(3)", "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(3)", "etag": "\"19\"", "type": "SP.Data.Task_x0020_UsersListItem" }, "FirstUniqueAncestorSecurableObject": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(3)/FirstUniqueAncestorSecurableObject" } }, "RoleAssignments": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(3)/RoleAssignments" } }, "AttachmentFiles": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(3)/AttachmentFiles" } }, "ContentType": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(3)/ContentType" } }, "FieldValuesAsHtml": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(3)/FieldValuesAsHtml" } }, "FieldValuesAsText": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(3)/FieldValuesAsText" } }, "FieldValuesForEdit": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(3)/FieldValuesForEdit" } }, "File": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(3)/File" } }, "Folder": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(3)/Folder" } }, "ParentList": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(3)/ParentList" } }, "FileSystemObjectType": 0, "Id": 3, "ContentTypeId": "0x01006B4194304DEAC34AAEDD2A28EE9349FF", "Title": "Deepak Trivedi", "AssingedToUserId": 10, "Item_x0020_Cover": { "__metadata": { "type": "SP.FieldUrlValue" }, "Description": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/PublishingImages/Portraits/portrait_Deepak.jpg", "Url": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/PublishingImages/Portraits/portrait_Deepak.jpg" }, "Status": true, "Role": { "__metadata": { "type": "Collection(Edm.String)" }, "results": ["Deliverable Teams", "Service Teams"] }, "UserGroupId": 17, "Suffix": null, "SortOrder": 2, "ParentID1": null, "isDeleted": false, "ItemType": "User", "IsActive": true, "Email": "deepaktrivedi81@gmail.com", "Group": null, "Company": "Smalsus", "ID": 3, "Modified": "2020-05-05T13:25:51Z", "Created": "2018-01-12T12:11:13Z", "AuthorId": 10, "EditorId": 46, "OData__UIVersionString": "13.0", "Attachments": false, "GUID": "f5cce48e-cb55-424b-ba74-5ddb83dfdc8e" }, { "__metadata": { "id": "Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(4)", "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(4)", "etag": "\"17\"", "type": "SP.Data.Task_x0020_UsersListItem" }, "FirstUniqueAncestorSecurableObject": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(4)/FirstUniqueAncestorSecurableObject" } }, "RoleAssignments": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(4)/RoleAssignments" } }, "AttachmentFiles": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(4)/AttachmentFiles" } }, "ContentType": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(4)/ContentType" } }, "FieldValuesAsHtml": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(4)/FieldValuesAsHtml" } }, "FieldValuesAsText": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(4)/FieldValuesAsText" } }, "FieldValuesForEdit": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(4)/FieldValuesForEdit" } }, "File": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(4)/File" } }, "Folder": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(4)/Folder" } }, "ParentList": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(4)/ParentList" } }, "FileSystemObjectType": 0, "Id": 4, "ContentTypeId": "0x01006B4194304DEAC34AAEDD2A28EE9349FF", "Title": "Ajeet Mishra", "AssingedToUserId": 19, "Item_x0020_Cover": { "__metadata": { "type": "SP.FieldUrlValue" }, "Description": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/PublishingImages/Portraits/portrait_Ajeet.jpg", "Url": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/PublishingImages/Portraits/portrait_Ajeet.jpg" }, "Status": true, "Role": { "__metadata": { "type": "Collection(Edm.String)" }, "results": ["Deliverable Teams"] }, "UserGroupId": 16, "Suffix": null, "SortOrder": 3, "ParentID1": null, "isDeleted": false, "ItemType": "User", "IsActive": true, "Email": "spsupport1@smalsus.com", "Group": null, "Company": "Smalsus", "ID": 4, "Modified": "2020-05-05T13:27:20Z", "Created": "2018-01-12T12:12:38Z", "AuthorId": 10, "EditorId": 46, "OData__UIVersionString": "11.0", "Attachments": false, "GUID": "ca73b422-ab0a-4af9-a25c-8789279f2324" }, { "__metadata": { "id": "Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(5)", "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(5)", "etag": "\"20\"", "type": "SP.Data.Task_x0020_UsersListItem" }, "FirstUniqueAncestorSecurableObject": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(5)/FirstUniqueAncestorSecurableObject" } }, "RoleAssignments": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(5)/RoleAssignments" } }, "AttachmentFiles": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(5)/AttachmentFiles" } }, "ContentType": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(5)/ContentType" } }, "FieldValuesAsHtml": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(5)/FieldValuesAsHtml" } }, "FieldValuesAsText": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(5)/FieldValuesAsText" } }, "FieldValuesForEdit": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(5)/FieldValuesForEdit" } }, "File": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(5)/File" } }, "Folder": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(5)/Folder" } }, "ParentList": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(5)/ParentList" } }, "FileSystemObjectType": 0, "Id": 5, "ContentTypeId": "0x01006B4194304DEAC34AAEDD2A28EE9349FF", "Title": "Atul Kumar", "AssingedToUserId": 20, "Item_x0020_Cover": { "__metadata": { "type": "SP.FieldUrlValue" }, "Description": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/PublishingImages/Portraits/portrait_Atul.jpg", "Url": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/PublishingImages/Portraits/portrait_Atul.jpg" }, "Status": true, "Role": { "__metadata": { "type": "Collection(Edm.String)" }, "results": ["Deliverable Teams"] }, "UserGroupId": 16, "Suffix": null, "SortOrder": 4, "ParentID1": null, "isDeleted": false, "ItemType": "User", "IsActive": true, "Email": "spsupport2@smalsus.com", "Group": null, "Company": "Smalsus", "ID": 5, "Modified": "2020-05-05T13:28:53Z", "Created": "2018-01-12T12:13:06Z", "AuthorId": 10, "EditorId": 46, "OData__UIVersionString": "14.0", "Attachments": false, "GUID": "dee54de2-6654-4953-bb61-0858dac9ed7c" }, { "__metadata": { "id": "Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(6)", "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(6)", "etag": "\"25\"", "type": "SP.Data.Task_x0020_UsersListItem" }, "FirstUniqueAncestorSecurableObject": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(6)/FirstUniqueAncestorSecurableObject" } }, "RoleAssignments": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(6)/RoleAssignments" } }, "AttachmentFiles": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(6)/AttachmentFiles" } }, "ContentType": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(6)/ContentType" } }, "FieldValuesAsHtml": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(6)/FieldValuesAsHtml" } }, "FieldValuesAsText": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(6)/FieldValuesAsText" } }, "FieldValuesForEdit": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(6)/FieldValuesForEdit" } }, "File": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(6)/File" } }, "Folder": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(6)/Folder" } }, "ParentList": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(6)/ParentList" } }, "FileSystemObjectType": 0, "Id": 6, "ContentTypeId": "0x01006B4194304DEAC34AAEDD2A28EE9349FF", "Title": "QA", "AssingedToUserId": 25, "Item_x0020_Cover": { "__metadata": { "type": "SP.FieldUrlValue" }, "Description": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/SiteCollectionImages/ICONS/32/icon_QA.png", "Url": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/SiteCollectionImages/ICONS/32/square_icon_QA.png" }, "Status": true, "Role": { "__metadata": { "type": "Collection(Edm.String)" }, "results": ["Deliverable Teams"] }, "UserGroupId": 16, "Suffix": null, "SortOrder": 10, "ParentID1": null, "isDeleted": false, "ItemType": "User", "IsActive": true, "Email": "nusrat.sheikh@smalsus.com", "Group": null, "Company": "Smalsus", "ID": 6, "Modified": "2020-05-05T13:33:42Z", "Created": "2018-01-12T12:14:46Z", "AuthorId": 10, "EditorId": 46, "OData__UIVersionString": "15.0", "Attachments": false, "GUID": "32050ce1-b1dc-43be-9f18-db5f8e87e54b" }, { "__metadata": { "id": "Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(7)", "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(7)", "etag": "\"20\"", "type": "SP.Data.Task_x0020_UsersListItem" }, "FirstUniqueAncestorSecurableObject": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(7)/FirstUniqueAncestorSecurableObject" } }, "RoleAssignments": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(7)/RoleAssignments" } }, "AttachmentFiles": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(7)/AttachmentFiles" } }, "ContentType": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(7)/ContentType" } }, "FieldValuesAsHtml": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(7)/FieldValuesAsHtml" } }, "FieldValuesAsText": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(7)/FieldValuesAsText" } }, "FieldValuesForEdit": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(7)/FieldValuesForEdit" } }, "File": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(7)/File" } }, "Folder": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(7)/Folder" } }, "ParentList": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(7)/ParentList" } }, "FileSystemObjectType": 0, "Id": 7, "ContentTypeId": "0x01006B4194304DEAC34AAEDD2A28EE9349FF", "Title": "Stefan Hochhuth", "AssingedToUserId": 14, "Item_x0020_Cover": { "__metadata": { "type": "SP.FieldUrlValue" }, "Description": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/PublishingImages/Portraits/portrait_Stefan.jpg", "Url": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/PublishingImages/Portraits/portrait_Stefan.jpg" }, "Status": true, "Role": { "__metadata": { "type": "Collection(Edm.String)" }, "results": ["Deliverable Teams", "Service Teams"] }, "UserGroupId": 17, "Suffix": null, "SortOrder": 1, "ParentID1": null, "isDeleted": false, "ItemType": "User", "IsActive": true, "Email": "w20009@gmail.com", "Group": "Team Members", "Company": "HHHH", "ID": 7, "Modified": "2020-05-05T13:25:58Z", "Created": "2018-01-12T20:28:15Z", "AuthorId": 10, "EditorId": 46, "OData__UIVersionString": "15.0", "Attachments": false, "GUID": "d1877a52-adc2-46b7-840d-24fb84c8fb2c" }, { "__metadata": { "id": "Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(9)", "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(9)", "etag": "\"19\"", "type": "SP.Data.Task_x0020_UsersListItem" }, "FirstUniqueAncestorSecurableObject": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(9)/FirstUniqueAncestorSecurableObject" } }, "RoleAssignments": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(9)/RoleAssignments" } }, "AttachmentFiles": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(9)/AttachmentFiles" } }, "ContentType": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(9)/ContentType" } }, "FieldValuesAsHtml": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(9)/FieldValuesAsHtml" } }, "FieldValuesAsText": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(9)/FieldValuesAsText" } }, "FieldValuesForEdit": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(9)/FieldValuesForEdit" } }, "File": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(9)/File" } }, "Folder": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(9)/Folder" } }, "ParentList": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(9)/ParentList" } }, "FileSystemObjectType": 0, "Id": 9, "ContentTypeId": "0x01006B4194304DEAC34AAEDD2A28EE9349FF", "Title": "Mattis Hahn", "AssingedToUserId": 23, "Item_x0020_Cover": { "__metadata": { "type": "SP.FieldUrlValue" }, "Description": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/PublishingImages/Portraits/portrait_Mattis_Hahn.jpg", "Url": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/PublishingImages/Portraits/portrait_Mattis_Hahn.jpg" }, "Status": true, "Role": { "__metadata": { "type": "Collection(Edm.String)" }, "results": ["Service Teams", "Deliverable Teams"] }, "UserGroupId": 18, "Suffix": null, "SortOrder": null, "ParentID1": null, "isDeleted": false, "ItemType": "User", "IsActive": true, "Email": "mattis_hahn@yahoo.de", "Group": "Team Members", "Company": "HHHH", "ID": 9, "Modified": "2020-04-20T12:31:42Z", "Created": "2018-03-30T11:50:54Z", "AuthorId": 14, "EditorId": 10, "OData__UIVersionString": "16.0", "Attachments": false, "GUID": "7189fe94-50f9-4feb-b8ca-3d7d50dcfb1f" }, { "__metadata": { "id": "Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(10)", "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(10)", "etag": "\"27\"", "type": "SP.Data.Task_x0020_UsersListItem" }, "FirstUniqueAncestorSecurableObject": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(10)/FirstUniqueAncestorSecurableObject" } }, "RoleAssignments": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(10)/RoleAssignments" } }, "AttachmentFiles": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(10)/AttachmentFiles" } }, "ContentType": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(10)/ContentType" } }, "FieldValuesAsHtml": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(10)/FieldValuesAsHtml" } }, "FieldValuesAsText": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(10)/FieldValuesAsText" } }, "FieldValuesForEdit": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(10)/FieldValuesForEdit" } }, "File": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(10)/File" } }, "Folder": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(10)/Folder" } }, "ParentList": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(10)/ParentList" } }, "FileSystemObjectType": 0, "Id": 10, "ContentTypeId": "0x01006B4194304DEAC34AAEDD2A28EE9349FF", "Title": "Support", "AssingedToUserId": 18, "Item_x0020_Cover": { "__metadata": { "type": "SP.FieldUrlValue" }, "Description": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/SiteCollectionImages/ICONS/32/square_icon_SP.png", "Url": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/SiteCollectionImages/ICONS/32/square_icon_SP.png" }, "Status": true, "Role": { "__metadata": { "type": "Collection(Edm.String)" }, "results": ["Deliverable Teams"] }, "UserGroupId": 16, "Suffix": null, "SortOrder": 9, "ParentID1": null, "isDeleted": false, "ItemType": "User", "IsActive": true, "Email": "spsupport@smalsus.com", "Group": null, "Company": "Smalsus", "ID": 10, "Modified": "2020-05-05T13:33:36Z", "Created": "2018-04-06T05:31:48Z", "AuthorId": 10, "EditorId": 46, "OData__UIVersionString": "25.0", "Attachments": false, "GUID": "11de2125-e8b8-4177-9580-9f602f210c48" }, { "__metadata": { "id": "Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(13)", "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(13)", "etag": "\"20\"", "type": "SP.Data.Task_x0020_UsersListItem" }, "FirstUniqueAncestorSecurableObject": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(13)/FirstUniqueAncestorSecurableObject" } }, "RoleAssignments": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(13)/RoleAssignments" } }, "AttachmentFiles": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(13)/AttachmentFiles" } }, "ContentType": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(13)/ContentType" } }, "FieldValuesAsHtml": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(13)/FieldValuesAsHtml" } }, "FieldValuesAsText": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(13)/FieldValuesAsText" } }, "FieldValuesForEdit": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(13)/FieldValuesForEdit" } }, "File": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(13)/File" } }, "Folder": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(13)/Folder" } }, "ParentList": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(13)/ParentList" } }, "FileSystemObjectType": 0, "Id": 13, "ContentTypeId": "0x01006B4194304DEAC34AAEDD2A28EE9349FF", "Title": "Design", "AssingedToUserId": 27, "Item_x0020_Cover": { "__metadata": { "type": "SP.FieldUrlValue" }, "Description": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/SiteCollectionImages/ICONS/32/square_icon_UI.png", "Url": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/SiteCollectionImages/ICONS/32/square_icon_UI.png" }, "Status": true, "Role": { "__metadata": { "type": "Collection(Edm.String)" }, "results": ["Deliverable Teams"] }, "UserGroupId": 70, "Suffix": null, "SortOrder": 1, "ParentID1": null, "isDeleted": false, "ItemType": "User", "IsActive": true, "Email": "designteam@smalsus.com", "Group": null, "Company": "Smalsus", "ID": 13, "Modified": "2020-05-05T13:33:51Z", "Created": "2018-04-06T11:47:34Z", "AuthorId": 10, "EditorId": 46, "OData__UIVersionString": "17.0", "Attachments": false, "GUID": "c8980cbf-ea78-460c-8e28-fcb8d8ca82ee" }, { "__metadata": { "id": "Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(14)", "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(14)", "etag": "\"27\"", "type": "SP.Data.Task_x0020_UsersListItem" }, "FirstUniqueAncestorSecurableObject": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(14)/FirstUniqueAncestorSecurableObject" } }, "RoleAssignments": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(14)/RoleAssignments" } }, "AttachmentFiles": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(14)/AttachmentFiles" } }, "ContentType": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(14)/ContentType" } }, "FieldValuesAsHtml": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(14)/FieldValuesAsHtml" } }, "FieldValuesAsText": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(14)/FieldValuesAsText" } }, "FieldValuesForEdit": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(14)/FieldValuesForEdit" } }, "File": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(14)/File" } }, "Folder": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(14)/Folder" } }, "ParentList": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(14)/ParentList" } }, "FileSystemObjectType": 0, "Id": 14, "ContentTypeId": "0x01006B4194304DEAC34AAEDD2A28EE9349FF", "Title": "Nusrat Sheikh", "AssingedToUserId": 28, "Item_x0020_Cover": { "__metadata": { "type": "SP.FieldUrlValue" }, "Description": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/PublishingImages/Portraits/icon_user.jpg", "Url": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/PublishingImages/Portraits/icon_user.jpg" }, "Status": true, "Role": { "__metadata": { "type": "Collection(Edm.String)" }, "results": ["Deliverable Teams"] }, "UserGroupId": 69, "Suffix": null, "SortOrder": 1, "ParentID1": null, "isDeleted": false, "ItemType": "User", "IsActive": true, "Email": "ashutosh@smalsus.com", "Group": "Team Leaders", "Company": "Smalsus", "ID": 14, "Modified": "2020-05-05T13:34:30Z", "Created": "2018-06-26T12:44:19Z", "AuthorId": 28, "EditorId": 46, "OData__UIVersionString": "27.0", "Attachments": false, "GUID": "4c2bb891-a07d-4e5b-80d0-d993c39ad9bf" }, { "__metadata": { "id": "Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(16)", "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(16)", "etag": "\"7\"", "type": "SP.Data.Task_x0020_UsersListItem" }, "FirstUniqueAncestorSecurableObject": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(16)/FirstUniqueAncestorSecurableObject" } }, "RoleAssignments": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(16)/RoleAssignments" } }, "AttachmentFiles": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(16)/AttachmentFiles" } }, "ContentType": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(16)/ContentType" } }, "FieldValuesAsHtml": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(16)/FieldValuesAsHtml" } }, "FieldValuesAsText": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(16)/FieldValuesAsText" } }, "FieldValuesForEdit": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(16)/FieldValuesForEdit" } }, "File": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(16)/File" } }, "Folder": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(16)/Folder" } }, "ParentList": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(16)/ParentList" } }, "FileSystemObjectType": 0, "Id": 16, "ContentTypeId": "0x01006B4194304DEAC34AAEDD2A28EE9349FF", "Title": "Support Team", "AssingedToUserId": null, "Item_x0020_Cover": null, "Status": true, "Role": null, "UserGroupId": null, "Suffix": null, "SortOrder": 3, "ParentID1": null, "isDeleted": false, "ItemType": "Group", "IsActive": true, "Email": null, "Group": null, "Company": "Smalsus", "ID": 16, "Modified": "2020-05-05T13:23:45Z", "Created": "2020-02-27T06:02:46Z", "AuthorId": 18, "EditorId": 46, "OData__UIVersionString": "7.0", "Attachments": false, "GUID": "78ca88f0-46d6-4f52-83c1-c3b6af938918" }, { "__metadata": { "id": "Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(17)", "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(17)", "etag": "\"6\"", "type": "SP.Data.Task_x0020_UsersListItem" }, "FirstUniqueAncestorSecurableObject": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(17)/FirstUniqueAncestorSecurableObject" } }, "RoleAssignments": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(17)/RoleAssignments" } }, "AttachmentFiles": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(17)/AttachmentFiles" } }, "ContentType": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(17)/ContentType" } }, "FieldValuesAsHtml": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(17)/FieldValuesAsHtml" } }, "FieldValuesAsText": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(17)/FieldValuesAsText" } }, "FieldValuesForEdit": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(17)/FieldValuesForEdit" } }, "File": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(17)/File" } }, "Folder": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(17)/Folder" } }, "ParentList": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(17)/ParentList" } }, "FileSystemObjectType": 0, "Id": 17, "ContentTypeId": "0x01006B4194304DEAC34AAEDD2A28EE9349FF", "Title": "Senior Team", "AssingedToUserId": null, "Item_x0020_Cover": null, "Status": true, "Role": null, "UserGroupId": null, "Suffix": null, "SortOrder": 1, "ParentID1": null, "isDeleted": false, "ItemType": "Group", "IsActive": true, "Email": null, "Group": null, "Company": "Smalsus", "ID": 17, "Modified": "2020-05-05T13:23:08Z", "Created": "2020-02-27T06:04:19Z", "AuthorId": 18, "EditorId": 46, "OData__UIVersionString": "6.0", "Attachments": false, "GUID": "b8f99c77-4e73-4c0e-be8c-10c75a21232b" }, { "__metadata": { "id": "Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(18)", "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(18)", "etag": "\"5\"", "type": "SP.Data.Task_x0020_UsersListItem" }, "FirstUniqueAncestorSecurableObject": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(18)/FirstUniqueAncestorSecurableObject" } }, "RoleAssignments": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(18)/RoleAssignments" } }, "AttachmentFiles": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(18)/AttachmentFiles" } }, "ContentType": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(18)/ContentType" } }, "FieldValuesAsHtml": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(18)/FieldValuesAsHtml" } }, "FieldValuesAsText": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(18)/FieldValuesAsText" } }, "FieldValuesForEdit": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(18)/FieldValuesForEdit" } }, "File": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(18)/File" } }, "Folder": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(18)/Folder" } }, "ParentList": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(18)/ParentList" } }, "FileSystemObjectType": 0, "Id": 18, "ContentTypeId": "0x01006B4194304DEAC34AAEDD2A28EE9349FF", "Title": "HHHH Team", "AssingedToUserId": null, "Item_x0020_Cover": null, "Status": true, "Role": null, "UserGroupId": null, "Suffix": null, "SortOrder": 2, "ParentID1": null, "isDeleted": false, "ItemType": "Group", "IsActive": true, "Email": null, "Group": null, "Company": "Smalsus", "ID": 18, "Modified": "2020-05-05T13:23:17Z", "Created": "2020-02-27T06:04:54Z", "AuthorId": 18, "EditorId": 46, "OData__UIVersionString": "5.0", "Attachments": false, "GUID": "a6c65453-7644-4641-9717-1ad60cd7fb93" }, { "__metadata": { "id": "Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(69)", "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(69)", "etag": "\"5\"", "type": "SP.Data.Task_x0020_UsersListItem" }, "FirstUniqueAncestorSecurableObject": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(69)/FirstUniqueAncestorSecurableObject" } }, "RoleAssignments": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(69)/RoleAssignments" } }, "AttachmentFiles": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(69)/AttachmentFiles" } }, "ContentType": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(69)/ContentType" } }, "FieldValuesAsHtml": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(69)/FieldValuesAsHtml" } }, "FieldValuesAsText": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(69)/FieldValuesAsText" } }, "FieldValuesForEdit": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(69)/FieldValuesForEdit" } }, "File": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(69)/File" } }, "Folder": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(69)/Folder" } }, "ParentList": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(69)/ParentList" } }, "FileSystemObjectType": 0, "Id": 69, "ContentTypeId": "0x01006B4194304DEAC34AAEDD2A28EE9349FF", "Title": "QA Team", "AssingedToUserId": null, "Item_x0020_Cover": null, "Status": true, "Role": null, "UserGroupId": null, "Suffix": "QT", "SortOrder": 5, "ParentID1": null, "isDeleted": false, "ItemType": "Group", "IsActive": true, "Email": null, "Group": null, "Company": "Smalsus", "ID": 69, "Modified": "2020-05-05T13:23:52Z", "Created": "2020-03-25T12:39:48Z", "AuthorId": 10, "EditorId": 46, "OData__UIVersionString": "5.0", "Attachments": false, "GUID": "e9fddc57-5705-4a21-bd1a-f5eb52761413" }, { "__metadata": { "id": "Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(70)", "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(70)", "etag": "\"7\"", "type": "SP.Data.Task_x0020_UsersListItem" }, "FirstUniqueAncestorSecurableObject": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(70)/FirstUniqueAncestorSecurableObject" } }, "RoleAssignments": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(70)/RoleAssignments" } }, "AttachmentFiles": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(70)/AttachmentFiles" } }, "ContentType": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(70)/ContentType" } }, "FieldValuesAsHtml": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(70)/FieldValuesAsHtml" } }, "FieldValuesAsText": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(70)/FieldValuesAsText" } }, "FieldValuesForEdit": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(70)/FieldValuesForEdit" } }, "File": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(70)/File" } }, "Folder": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(70)/Folder" } }, "ParentList": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(70)/ParentList" } }, "FileSystemObjectType": 0, "Id": 70, "ContentTypeId": "0x01006B4194304DEAC34AAEDD2A28EE9349FF", "Title": "Design Team", "AssingedToUserId": null, "Item_x0020_Cover": null, "Status": true, "Role": null, "UserGroupId": null, "Suffix": "DT", "SortOrder": 4, "ParentID1": null, "isDeleted": false, "ItemType": "Group", "IsActive": true, "Email": null, "Group": null, "Company": "Smalsus", "ID": 70, "Modified": "2020-05-05T13:23:48Z", "Created": "2020-03-25T12:39:59Z", "AuthorId": 10, "EditorId": 46, "OData__UIVersionString": "7.0", "Attachments": false, "GUID": "be11cc56-ef96-4d2a-a2f9-7bd32379d80a" }, { "__metadata": { "id": "Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(78)", "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(78)", "etag": "\"6\"", "type": "SP.Data.Task_x0020_UsersListItem" }, "FirstUniqueAncestorSecurableObject": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(78)/FirstUniqueAncestorSecurableObject" } }, "RoleAssignments": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(78)/RoleAssignments" } }, "AttachmentFiles": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(78)/AttachmentFiles" } }, "ContentType": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(78)/ContentType" } }, "FieldValuesAsHtml": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(78)/FieldValuesAsHtml" } }, "FieldValuesAsText": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(78)/FieldValuesAsText" } }, "FieldValuesForEdit": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(78)/FieldValuesForEdit" } }, "File": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(78)/File" } }, "Folder": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(78)/Folder" } }, "ParentList": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(78)/ParentList" } }, "FileSystemObjectType": 0, "Id": 78, "ContentTypeId": "0x01006B4194304DEAC34AAEDD2A28EE9349FF", "Title": "Nadia Schneider", "AssingedToUserId": 41, "Item_x0020_Cover": { "__metadata": { "type": "SP.FieldUrlValue" }, "Description": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/SiteCollectionImages/ICONS/32/icon_Nadia.png", "Url": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/SiteCollectionImages/ICONS/32/icon_Nadia.png" }, "Status": true, "Role": { "__metadata": { "type": "Collection(Edm.String)" }, "results": ["Service Teams"] }, "UserGroupId": 18, "Suffix": "NS", "SortOrder": null, "ParentID1": null, "isDeleted": false, "ItemType": "User", "IsActive": true, "Email": "nadia.schneider@hochhuth-consulting.de", "Group": null, "Company": "HHHH", "ID": 78, "Modified": "2020-04-21T19:53:29Z", "Created": "2020-03-30T17:34:38Z", "AuthorId": 14, "EditorId": 10, "OData__UIVersionString": "6.0", "Attachments": false, "GUID": "3ca731ef-48f0-461e-b872-fac086906401" }, { "__metadata": { "id": "Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(91)", "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(91)", "etag": "\"1\"", "type": "SP.Data.Task_x0020_UsersListItem" }, "FirstUniqueAncestorSecurableObject": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(91)/FirstUniqueAncestorSecurableObject" } }, "RoleAssignments": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(91)/RoleAssignments" } }, "AttachmentFiles": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(91)/AttachmentFiles" } }, "ContentType": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(91)/ContentType" } }, "FieldValuesAsHtml": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(91)/FieldValuesAsHtml" } }, "FieldValuesAsText": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(91)/FieldValuesAsText" } }, "FieldValuesForEdit": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(91)/FieldValuesForEdit" } }, "File": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(91)/File" } }, "Folder": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(91)/Folder" } }, "ParentList": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(91)/ParentList" } }, "FileSystemObjectType": 0, "Id": 91, "ContentTypeId": "0x01006B4194304DEAC34AAEDD2A28EE9349FF", "Title": "Simran Kaur", "AssingedToUserId": null, "Item_x0020_Cover": null, "Status": true, "Role": null, "UserGroupId": null, "Suffix": null, "SortOrder": null, "ParentID1": null, "isDeleted": false, "ItemType": null, "IsActive": true, "Email": "simran.kaur@smalsus.com", "Group": null, "Company": "Smalsus", "ID": 91, "Modified": "2020-05-02T06:33:00Z", "Created": "2020-05-02T06:33:00Z", "AuthorId": 18, "EditorId": 18, "OData__UIVersionString": "1.0", "Attachments": false, "GUID": "6df0bd16-38b8-4bf2-beaa-ed9dd128ac33" }, { "__metadata": { "id": "Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(93)", "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(93)", "etag": "\"3\"", "type": "SP.Data.Task_x0020_UsersListItem" }, "FirstUniqueAncestorSecurableObject": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(93)/FirstUniqueAncestorSecurableObject" } }, "RoleAssignments": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(93)/RoleAssignments" } }, "AttachmentFiles": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(93)/AttachmentFiles" } }, "ContentType": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(93)/ContentType" } }, "FieldValuesAsHtml": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(93)/FieldValuesAsHtml" } }, "FieldValuesAsText": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(93)/FieldValuesAsText" } }, "FieldValuesForEdit": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(93)/FieldValuesForEdit" } }, "File": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(93)/File" } }, "Folder": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(93)/Folder" } }, "ParentList": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(93)/ParentList" } }, "FileSystemObjectType": 0, "Id": 93, "ContentTypeId": "0x01006B4194304DEAC34AAEDD2A28EE9349FF", "Title": "Kushal Rajput", "AssingedToUserId": 42, "Item_x0020_Cover": { "__metadata": { "type": "SP.FieldUrlValue" }, "Description": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/PublishingImages/NewUsersImages/Kushal%20Rajput.png", "Url": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/PublishingImages/NewUsersImages/Kushal%20Rajput.png" }, "Status": true, "Role": { "__metadata": { "type": "Collection(Edm.String)" }, "results": ["Deliverable Teams"] }, "UserGroupId": 16, "Suffix": "KR", "SortOrder": 6, "ParentID1": null, "isDeleted": false, "ItemType": "User", "IsActive": true, "Email": null, "Group": null, "Company": "Smalsus", "ID": 93, "Modified": "2020-05-05T13:28:58Z", "Created": "2020-05-05T04:54:48Z", "AuthorId": 10, "EditorId": 46, "OData__UIVersionString": "3.0", "Attachments": false, "GUID": "b1f4b54c-8bc2-4f76-88a9-c90f07d67127" }, { "__metadata": { "id": "Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(94)", "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(94)", "etag": "\"3\"", "type": "SP.Data.Task_x0020_UsersListItem" }, "FirstUniqueAncestorSecurableObject": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(94)/FirstUniqueAncestorSecurableObject" } }, "RoleAssignments": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(94)/RoleAssignments" } }, "AttachmentFiles": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(94)/AttachmentFiles" } }, "ContentType": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(94)/ContentType" } }, "FieldValuesAsHtml": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(94)/FieldValuesAsHtml" } }, "FieldValuesAsText": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(94)/FieldValuesAsText" } }, "FieldValuesForEdit": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(94)/FieldValuesForEdit" } }, "File": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(94)/File" } }, "Folder": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(94)/Folder" } }, "ParentList": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(94)/ParentList" } }, "FileSystemObjectType": 0, "Id": 94, "ContentTypeId": "0x01006B4194304DEAC34AAEDD2A28EE9349FF", "Title": "Piyoosh Bhardwaj", "AssingedToUserId": 46, "Item_x0020_Cover": { "__metadata": { "type": "SP.FieldUrlValue" }, "Description": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/PublishingImages/NewUsersImages/PiyooshBhardwaj.png", "Url": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/PublishingImages/NewUsersImages/PiyooshBhardwaj.png" }, "Status": true, "Role": { "__metadata": { "type": "Collection(Edm.String)" }, "results": ["Deliverable Teams"] }, "UserGroupId": 16, "Suffix": "PB", "SortOrder": 5, "ParentID1": null, "isDeleted": false, "ItemType": "User", "IsActive": true, "Email": null, "Group": null, "Company": "Smalsus", "ID": 94, "Modified": "2020-05-05T13:29:02Z", "Created": "2020-05-05T04:55:35Z", "AuthorId": 10, "EditorId": 46, "OData__UIVersionString": "3.0", "Attachments": false, "GUID": "ba748460-5ff1-4d06-ae32-5c5b5c90aa3d" }, { "__metadata": { "id": "Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(95)", "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(95)", "etag": "\"3\"", "type": "SP.Data.Task_x0020_UsersListItem" }, "FirstUniqueAncestorSecurableObject": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(95)/FirstUniqueAncestorSecurableObject" } }, "RoleAssignments": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(95)/RoleAssignments" } }, "AttachmentFiles": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(95)/AttachmentFiles" } }, "ContentType": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(95)/ContentType" } }, "FieldValuesAsHtml": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(95)/FieldValuesAsHtml" } }, "FieldValuesAsText": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(95)/FieldValuesAsText" } }, "FieldValuesForEdit": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(95)/FieldValuesForEdit" } }, "File": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(95)/File" } }, "Folder": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(95)/Folder" } }, "ParentList": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(95)/ParentList" } }, "FileSystemObjectType": 0, "Id": 95, "ContentTypeId": "0x01006B4194304DEAC34AAEDD2A28EE9349FF", "Title": "Ankit Tiwari", "AssingedToUserId": 45, "Item_x0020_Cover": { "__metadata": { "type": "SP.FieldUrlValue" }, "Description": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/PublishingImages/NewUsersImages/AnkitTiwari.png", "Url": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/PublishingImages/NewUsersImages/AnkitTiwari.png" }, "Status": true, "Role": { "__metadata": { "type": "Collection(Edm.String)" }, "results": ["Deliverable Teams"] }, "UserGroupId": 16, "Suffix": "AT", "SortOrder": 7, "ParentID1": null, "isDeleted": false, "ItemType": "User", "IsActive": true, "Email": null, "Group": null, "Company": "Smalsus", "ID": 95, "Modified": "2020-05-05T13:29:07Z", "Created": "2020-05-05T04:56:53Z", "AuthorId": 10, "EditorId": 46, "OData__UIVersionString": "3.0", "Attachments": false, "GUID": "affc13c7-de04-4495-9351-1c9562144235" }, { "__metadata": { "id": "Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(96)", "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(96)", "etag": "\"3\"", "type": "SP.Data.Task_x0020_UsersListItem" }, "FirstUniqueAncestorSecurableObject": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(96)/FirstUniqueAncestorSecurableObject" } }, "RoleAssignments": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(96)/RoleAssignments" } }, "AttachmentFiles": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(96)/AttachmentFiles" } }, "ContentType": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(96)/ContentType" } }, "FieldValuesAsHtml": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(96)/FieldValuesAsHtml" } }, "FieldValuesAsText": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(96)/FieldValuesAsText" } }, "FieldValuesForEdit": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(96)/FieldValuesForEdit" } }, "File": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(96)/File" } }, "Folder": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(96)/Folder" } }, "ParentList": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(96)/ParentList" } }, "FileSystemObjectType": 0, "Id": 96, "ContentTypeId": "0x01006B4194304DEAC34AAEDD2A28EE9349FF", "Title": "Amit Kumar", "AssingedToUserId": 43, "Item_x0020_Cover": { "__metadata": { "type": "SP.FieldUrlValue" }, "Description": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/PublishingImages/NewUsersImages/Amit%20Kumar.png", "Url": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/PublishingImages/NewUsersImages/Amit%20Kumar.png" }, "Status": true, "Role": { "__metadata": { "type": "Collection(Edm.String)" }, "results": ["Deliverable Teams"] }, "UserGroupId": 16, "Suffix": "AK", "SortOrder": 8, "ParentID1": null, "isDeleted": false, "ItemType": "User", "IsActive": true, "Email": null, "Group": null, "Company": "Smalsus", "ID": 96, "Modified": "2020-05-05T13:29:14Z", "Created": "2020-05-05T04:57:22Z", "AuthorId": 10, "EditorId": 46, "OData__UIVersionString": "3.0", "Attachments": false, "GUID": "4ac278db-d4b6-4011-a65b-4f5634f0ba46" }, { "__metadata": { "id": "Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(97)", "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(97)", "etag": "\"5\"", "type": "SP.Data.Task_x0020_UsersListItem" }, "FirstUniqueAncestorSecurableObject": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(97)/FirstUniqueAncestorSecurableObject" } }, "RoleAssignments": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(97)/RoleAssignments" } }, "AttachmentFiles": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(97)/AttachmentFiles" } }, "ContentType": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(97)/ContentType" } }, "FieldValuesAsHtml": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(97)/FieldValuesAsHtml" } }, "FieldValuesAsText": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(97)/FieldValuesAsText" } }, "FieldValuesForEdit": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(97)/FieldValuesForEdit" } }, "File": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(97)/File" } }, "Folder": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(97)/Folder" } }, "ParentList": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(97)/ParentList" } }, "FileSystemObjectType": 0, "Id": 97, "ContentTypeId": "0x01006B4194304DEAC34AAEDD2A28EE9349FF", "Title": "Jyoti", "AssingedToUserId": 48, "Item_x0020_Cover": { "__metadata": { "type": "SP.FieldUrlValue" }, "Description": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/PublishingImages/NewUsersImages/jyoti%20Awasthi.png", "Url": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/PublishingImages/NewUsersImages/jyoti%20Awasthi.png" }, "Status": true, "Role": { "__metadata": { "type": "Collection(Edm.String)" }, "results": ["Deliverable Teams"] }, "UserGroupId": 70, "Suffix": "JA", "SortOrder": 3, "ParentID1": null, "isDeleted": false, "ItemType": "User", "IsActive": true, "Email": null, "Group": null, "Company": "Smalsus", "ID": 97, "Modified": "2020-05-05T13:34:00Z", "Created": "2020-05-05T04:57:57Z", "AuthorId": 10, "EditorId": 46, "OData__UIVersionString": "5.0", "Attachments": false, "GUID": "ae1755e6-b802-4165-857f-d1ba7bda6a9f" }, { "__metadata": { "id": "Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(98)", "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(98)", "etag": "\"4\"", "type": "SP.Data.Task_x0020_UsersListItem" }, "FirstUniqueAncestorSecurableObject": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(98)/FirstUniqueAncestorSecurableObject" } }, "RoleAssignments": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(98)/RoleAssignments" } }, "AttachmentFiles": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(98)/AttachmentFiles" } }, "ContentType": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(98)/ContentType" } }, "FieldValuesAsHtml": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(98)/FieldValuesAsHtml" } }, "FieldValuesAsText": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(98)/FieldValuesAsText" } }, "FieldValuesForEdit": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(98)/FieldValuesForEdit" } }, "File": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(98)/File" } }, "Folder": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(98)/Folder" } }, "ParentList": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(98)/ParentList" } }, "FileSystemObjectType": 0, "Id": 98, "ContentTypeId": "0x01006B4194304DEAC34AAEDD2A28EE9349FF", "Title": "Shivdutt Mishra", "AssingedToUserId": 49, "Item_x0020_Cover": { "__metadata": { "type": "SP.FieldUrlValue" }, "Description": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/PublishingImages/NewUsersImages/Shivdutt%20Mishra.png", "Url": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/PublishingImages/NewUsersImages/Shivdutt%20Mishra.png" }, "Status": true, "Role": { "__metadata": { "type": "Collection(Edm.String)" }, "results": ["Deliverable Teams"] }, "UserGroupId": 70, "Suffix": "SM", "SortOrder": 2, "ParentID1": null, "isDeleted": false, "ItemType": "User", "IsActive": true, "Email": null, "Group": null, "Company": "Smalsus", "ID": 98, "Modified": "2020-05-05T13:33:55Z", "Created": "2020-05-05T04:58:29Z", "AuthorId": 10, "EditorId": 46, "OData__UIVersionString": "4.0", "Attachments": false, "GUID": "9000f849-544e-47f9-97bd-1ae3cfae1ae2" }, { "__metadata": { "id": "Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(99)", "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(99)", "etag": "\"3\"", "type": "SP.Data.Task_x0020_UsersListItem" }, "FirstUniqueAncestorSecurableObject": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(99)/FirstUniqueAncestorSecurableObject" } }, "RoleAssignments": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(99)/RoleAssignments" } }, "AttachmentFiles": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(99)/AttachmentFiles" } }, "ContentType": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(99)/ContentType" } }, "FieldValuesAsHtml": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(99)/FieldValuesAsHtml" } }, "FieldValuesAsText": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(99)/FieldValuesAsText" } }, "FieldValuesForEdit": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(99)/FieldValuesForEdit" } }, "File": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(99)/File" } }, "Folder": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(99)/Folder" } }, "ParentList": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(99)/ParentList" } }, "FileSystemObjectType": 0, "Id": 99, "ContentTypeId": "0x01006B4194304DEAC34AAEDD2A28EE9349FF", "Title": "Sonal Choudhary", "AssingedToUserId": 50, "Item_x0020_Cover": { "__metadata": { "type": "SP.FieldUrlValue" }, "Description": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/PublishingImages/NewUsersImages/Sonal%20Chaudhary.png", "Url": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/PublishingImages/NewUsersImages/Sonal%20Chaudhary.png" }, "Status": true, "Role": { "__metadata": { "type": "Collection(Edm.String)" }, "results": ["Deliverable Teams"] }, "UserGroupId": 69, "Suffix": "SC", "SortOrder": 2, "ParentID1": null, "isDeleted": false, "ItemType": "User", "IsActive": true, "Email": null, "Group": null, "Company": "Smalsus", "ID": 99, "Modified": "2020-05-05T13:34:26Z", "Created": "2020-05-05T05:04:52Z", "AuthorId": 10, "EditorId": 46, "OData__UIVersionString": "3.0", "Attachments": false, "GUID": "c6461fc4-5793-442a-a29b-4c93c7fa8037" }, { "__metadata": { "id": "Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(100)", "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(100)", "etag": "\"3\"", "type": "SP.Data.Task_x0020_UsersListItem" }, "FirstUniqueAncestorSecurableObject": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(100)/FirstUniqueAncestorSecurableObject" } }, "RoleAssignments": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(100)/RoleAssignments" } }, "AttachmentFiles": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(100)/AttachmentFiles" } }, "ContentType": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(100)/ContentType" } }, "FieldValuesAsHtml": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(100)/FieldValuesAsHtml" } }, "FieldValuesAsText": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(100)/FieldValuesAsText" } }, "FieldValuesForEdit": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(100)/FieldValuesForEdit" } }, "File": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(100)/File" } }, "Folder": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(100)/Folder" } }, "ParentList": { "__deferred": { "uri": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/_api/Web/Lists(guid'02e5ea25-cabc-46d1-ad00-c207e31b60c5')/Items(100)/ParentList" } }, "FileSystemObjectType": 0, "Id": 100, "ContentTypeId": "0x01006B4194304DEAC34AAEDD2A28EE9349FF", "Title": "Garima Arya", "AssingedToUserId": 51, "Item_x0020_Cover": { "__metadata": { "type": "SP.FieldUrlValue" }, "Description": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/PublishingImages/NewUsersImages/Garima%20Arya.png", "Url": "https://hhhhteams.sharepoint.com/sites/HHHHTeams/PublishingImages/NewUsersImages/Garima%20Arya.png" }, "Status": true, "Role": { "__metadata": { "type": "Collection(Edm.String)" }, "results": ["Deliverable Teams"] }, "UserGroupId": 69, "Suffix": "GA", "SortOrder": 3, "ParentID1": null, "isDeleted": false, "ItemType": "User", "IsActive": true, "Email": null, "Group": null, "Company": "Smalsus", "ID": 100, "Modified": "2020-05-05T13:34:17Z", "Created": "2020-05-05T05:05:17Z", "AuthorId": 10, "EditorId": 46, "OData__UIVersionString": "3.0", "Attachments": false, "GUID": "05583ab7-3b10-40d5-8ac1-11760019164b" }];
        var isNewCreated = false;

        /*-------------------------------------------Breadcrumb--------------------------------------------------------*/
        var breadcrumb = function () {
            var breadcrumbitem = {};
            $scope.maincollection = [];
            var flag = false;
            if ($scope.Task != undefined && $scope.Task.Component != undefined && $scope.Task.Component.results.length > 0) {
                angular.forEach($scope.Task.Component.results, function (item) {
                    flag = false;
                    angular.forEach(AllComponentsData, function (value) {
                        if (item.Id == value.Id) {

                            if (value.Parent.Id != undefined) {
                                angular.forEach(AllComponentsData, function (component) {
                                    if (component.Id == value.Parent.Id) {
                                        if (value.Item_x0020_Type == "SubComponent") {
                                            flag = true;
                                            breadcrumbitem.Parentitem = component;
                                            breadcrumbitem.Child = item;
                                        } else {
                                            angular.forEach(AllComponentsData, function (subchild) {
                                                if (component.Parent.Id == subchild.Id) {
                                                    flag = true;
                                                    breadcrumbitem.Parentitem = subchild;
                                                    breadcrumbitem.Child = component;
                                                    breadcrumbitem.Subchild = item;
                                                } else if (component.Parent.Id == undefined && $scope.Task.Component.results[0].ItemType == "Feature") {
                                                    flag = true
                                                    breadcrumbitem.Parentitem = subchild;
                                                    breadcrumbitem.Child = undefined;
                                                    breadcrumbitem.Subchild = item;
                                                }
                                            })
                                        }
                                    }
                                })
                            } else if (value.Parent.Id == undefined) {
                                if (value.Item_x0020_Type == 'Component') {
                                    flag = true;
                                    breadcrumbitem.Parentitem = value;
                                }
                            }
                        }
                    })
                    if (flag) {
                        breadcrumbOtherHierarchy(breadcrumbitem);
                    }
                    breadcrumbitem = {};
                })

            }
            if ($scope.Task != undefined && $scope.Task.Services != undefined && $scope.Task.Services.results.length > 0) {
                angular.forEach($scope.Task.Services.results, function (item) {
                    flag = false;
                    angular.forEach(AllComponentsData, function (value) {

                        if (item.Id == value.Id) {

                            if (value.Parent.Id != undefined) {
                                angular.forEach(AllComponentsData, function (component) {
                                    if (component.Id == value.Parent.Id) {
                                        flag = true;
                                        if (value.Item_x0020_Type == "SubComponent") {
                                            breadcrumbitem.Parentitem = component;
                                            breadcrumbitem.Child = item;
                                        } else {
                                            angular.forEach(AllComponentsData, function (subchild) {
                                                if (component.Parent.Id == subchild.Id) {
                                                    flag = true;
                                                    breadcrumbitem.Parentitem = subchild;
                                                    breadcrumbitem.Child = component;
                                                    breadcrumbitem.Subchild = item;
                                                } else if (component.Parent.Id == undefined && $scope.Task.Services.results[0].ItemType == "Feature") {
                                                    flag = true
                                                    breadcrumbitem.Parentitem = subchild;
                                                    breadcrumbitem.Child = undefined;
                                                    breadcrumbitem.Subchild = item;
                                                }
                                            })
                                        }
                                    }
                                })
                            } else if (value.Parent.Id == undefined) {
                                if (value.Item_x0020_Type == 'Component') {
                                    flag = true;
                                    breadcrumbitem.Parentitem = value;
                                }
                            }
                        }
                    })
                    if (flag) {
                        breadcrumbOtherHierarchy(breadcrumbitem);
                    }
                    breadcrumbitem = {};
                })
            }
            if ($scope.Task != undefined && $scope.Task.Events != undefined && $scope.Task.Events.results.length > 0) {
                angular.forEach($scope.Task.Events.results, function (item) {
                    flag = false;
                    angular.forEach(AllComponentsData, function (value) {

                        if (item.Id == value.Id) {

                            if (value.Parent.Id != undefined) {
                                angular.forEach(AllComponentsData, function (component) {
                                    if (component.Id == value.Parent.Id) {
                                        if (value.Item_x0020_Type == "SubComponent") {
                                            flag = true;
                                            breadcrumbitem.Parentitem = component;
                                            breadcrumbitem.Child = item;
                                        } else {
                                            angular.forEach(AllComponentsData, function (subchild) {
                                                if (component.Parent.Id == subchild.Id) {
                                                    flag = true;
                                                    breadcrumbitem.Parentitem = subchild;
                                                    breadcrumbitem.Child = component;
                                                    breadcrumbitem.Subchild = item;
                                                }
                                            })
                                        }
                                    }
                                })
                            } else if (value.Parent.Id == undefined) {
                                if (value.Item_x0020_Type == 'Component') {
                                    flag = true;
                                    breadcrumbitem.Parentitem = value;
                                }
                            }
                        }
                    })
                    if (flag) {
                        breadcrumbOtherHierarchy(breadcrumbitem);
                    }
                    breadcrumbitem = {};
                })
            }
            if ($scope.Task.Component.results.length == 0 && $scope.Task.Services.results.length == 0 && $scope.Task != undefined && $scope.Task.Events != undefined && $scope.Task.Events.results.length == 0) {
                breadcrumbOtherHierarchy(breadcrumbitem);
                breadcrumbitem = {};
            }
        }
        const breadcrumbOtherHierarchy = function (breadcrumbitem) {
            angular.forEach($scope.allDataOfTask, function (value) {
                if ($scope.Task.SharewebTaskType.Title != undefined) {
                    if ($scope.Task.SharewebTaskType.Title == 'Activities') {
                        if (value.Id == $scope.Task.Id) {
                            value.isLastNode = true;
                            breadcrumbitem.ParentTask = value;
                        }
                    } else if ($scope.Task.SharewebTaskType.Title == 'Workstream') {
                        if ($scope.Task.ParentTask.Id != undefined) {
                            if ($scope.Task.ParentTask.Id == value.Id) {
                                $scope.Task.isLastNode = true;
                                breadcrumbitem.ParentTask = value;
                                breadcrumbitem.ChildTask = $scope.Task;
                            }
                        }
                    } else if ($scope.Task.SharewebTaskType.Title == 'Task') {
                        if ($scope.Task.ParentTask.Id != undefined) {
                            if ($scope.Task.ParentTask.Id == value.Id && value.SharewebTaskType.Title == 'Activities') {
                                $scope.Task.isLastNode = true;
                                breadcrumbitem.ParentTask = value;
                                breadcrumbitem.ChildTask = $scope.Task;
                            }
                            if ($scope.Task.ParentTask.Id == value.Id && value.SharewebTaskType.Title == 'Workstream') {
                                $scope.Task.isLastNode = true;
                                breadcrumbitem.ChildTask = value;
                                breadcrumbitem.SubChildTask = $scope.Task;

                            }
                            if (breadcrumbitem.ChildTask != undefined) {
                                angular.forEach($scope.allDataOfTask, function (values) {
                                    if (breadcrumbitem.ChildTask.ParentTask.Id == values.Id && breadcrumbitem.ChildTask.SharewebTaskType.Title == 'Workstream') {
                                        breadcrumbitem.ParentTask = values;
                                    }
                                });
                            }
                        } else {
                            $scope.Task.isLastNode = true;
                            breadcrumbitem.ParentTask = $scope.Task;
                        }
                    }
                }
            })
            if ($scope.Task.SharewebTaskType.Title == undefined) {
                $scope.Task.isLastNode = true;
                breadcrumbitem.ParentTask = $scope.Task;
            }
            $scope.maincollection.push(breadcrumbitem);
            breadcrumbitem = {};
        }
        var isitemExistCategoriess = function (TaskItems, title) {
            var isExists = false;
            angular.forEach(TaskItems, function (item) {
                if (title != undefined && item.Title != undefined && item.Title.toLowerCase() == title.toLowerCase()) {
                    isExists = true;
                    return false;
                }
            });
            return isExists;
        }
        $scope.loadColumnDetails = function () {
            SharewebListService.loadColumnDetails()
                .then(function (data) {
                    $scope.Columns = data.d.results;
                },
                    function (error) {
                        SharewebCommonFactoryService.handleError(error);
                    });
        };
        $scope.GetColumnDetails = function (name) {
            return SharewebCommonFactoryService.GetColumnDetails(name, $scope.Columns);
        }
        var compareCategories = function (Item) {
            $scope.SharewebCategories = [];
            if (Item.SharewebCategories != undefined && Item.SharewebCategories.results.length > 0) {
                angular.forEach(Item.SharewebCategories.results, function (cat) {
                    angular.forEach($scope.AllTaxonomyItems, function (smart) {
                        if (cat.Title != undefined && smart.Title != undefined && cat.Id == smart.Id) {
                            if (!isitemExistCategoriess($scope.SharewebCategories, smart.Title))
                                $scope.SharewebCategories.push(smart);
                        }

                    })

                })

            }

            if (Item.Categories != undefined) {
                var Items = Item.Categories.split(';');
                angular.forEach(Items, function (cat) {
                    angular.forEach($scope.AllTaxonomyItems, function (smart) {
                        if (cat != undefined && smart.Title != undefined && cat.toLowerCase() == smart.Title.toLowerCase()) {
                            if (!isitemExistCategoriess($scope.SharewebCategories, smart.Title))
                                $scope.SharewebCategories.push(smart);
                        }

                    })

                })

            }
        }

        $scope.UpdateTrafficLight = function (UpdatedItem, columnValue, columnName, SelectedValue) {
            SharewebCommonFactoryService.showProgressBar()
            var UserManager = '';
            var AssignedToUser = []
            angular.forEach($scope.AllUser, function (app) {
                if (app.AssingedToUserId != undefined && app.Approver.Id != undefined && app.AssingedToUserId == $scope.Task.Author.Id && _spPageContextInfo.userId == app.Approver.Id && $scope.Task.Status != "Follow up") {
                    if (app.Approver.Id != undefined)
                        UserManager = app.Approver.Id
                    AssignedToUser.push(app.Approver);
                    var Ids = columnName + SelectedValue + UpdatedItem.Id;
                    if (SelectedValue != undefined) {
                        $scope.ValidateItem = false;
                        if (SelectedValue == 'Reject') {
                            $('#' + Ids).addClass('red');
                            UpdatedItem.isShowLight = SelectedValue;
                        }
                        if (SelectedValue == 'Maybe') {
                            $('#' + Ids).addClass('yellow');
                            UpdatedItem.isShowLight = SelectedValue;
                        }
                        if (SelectedValue == 'Approve') {
                            $('#' + Ids).addClass('green');
                            UpdatedItem.isShowLight = SelectedValue;
                        }
                    }
                }
            })
            var date = new Date();
            $scope.param = date.getHours().toString() + date.getMinutes().toString() + date.getSeconds().toString();
            $scope.FeedBackDetails = [];
            var isCompleted = undefined;
            var FeedBackItem = {};
            var TeamMember = []
            TeamMember.push($scope.Task.AssignedTo.results[0].Id)
            TeamMember.push($scope.Task.Author.Id)
            FeedBackItem['Title'] = "FeedBackPicture" + $scope.param;
            FeedBackItem['FeedBackDescriptions'] = $scope.DescriptionFields;
            FeedBackItem['ImageDate'] = $scope.param;
            FeedBackItem['Completed'] = isCompleted;
            $scope.FeedBackDetails.push(FeedBackItem);
            $scope.Task.FeedBack = $scope.FeedBackDetails
            $scope.Metadata = $scope.Task.__metadata.type;
            if (SelectedValue == 'Approve' && ($scope.Task.PercentComplete == 0.01 || $scope.Task.PercentComplete == 1)) {
            SharewebCommonFactoryService.sendApprovedRejectedMail(SelectedValue, $scope.ListNameQuery, $scope.Task, undefined)
                .then(function (Data) {
                    $scope.isShowApprovalButtons = false;
                    $scope.EditItemCallBack($scope.Task);
                    SharewebCommonFactoryService.hideProgressBar();
                },
                    function (error) {
                        SharewebCommonFactoryService.hideProgressBar();
                        console.log(error);
                    })
            }
            else {
                var postData = {
                    __metadata: { "type": $scope.Metadata },
                    Id: $scope.Task.Id,
                    FeedBack: angular.toJson($scope.FeedBackDetails),
                };
                SharewebListService.UpdateListItemByListId($scope.CurrentSiteUrl, $scope.listId, postData, $scope.Task.Id)
                    .then(function (response) {
                        SharewebCommonFactoryService.hideProgressBar();
                        $scope.isShowApprovalButtons = false;
                    }, function (error) {
                        SharewebCommonFactoryService.hideProgressBar();
                        console.log(error);
                    });
                SharewebCommonFactoryService.hideProgressBar();
                console.log('sucessfully');

            }
        }
        $scope.loadSmartTaxonomyItems = function () {
            SharewebListService.getRequest(GlobalConstants.ADMIN_SITE_URL, "/getbyId('" + GlobalConstants.SMARTMETADATA_LIST_ID + "')/items?$select=Id,Title,Item_x005F_x0020_Cover,IsVisible,ParentID,SortOrder,Selectable,TaxType&$top=4999&$orderBy=SortOrder&$filter=IsVisible eq 1")
                .then(function (data) {

                    $scope.AllTaxonomyItems = data.d.results;
                    $scope.taxonomy = angular.copy($scope.AllTaxonomyItems);
                    //$scope.processCatagories = getProcessItems($scope.Item.ProcessCategoriesId.results, $scope.AllTaxonomyItems);
                    compareCategories($scope.Task);


                },
                    function (error) {
                        alert('Error: ' + error.result);
                    });

        }
        /*-----------------------------------------------------------Added By Tushar----------------------------------*/
        const initLoading = function () {
            $scope.loadTaskCategories();
            getAllTaskData();
            $scope.loadColumnDetails();
            $scope.isSiteOwner();
            $scope.isMemberSiteOwner();
            setTimeout(function () {
                $scope.GetTask();
            }, 1000);
        }
        let AllComponentsData = [];
        const loadOtherDetailsForComponents = function () {
            if ($scope.Task.Component.results != undefined && $scope.Task.Component.results.length == 0 && $scope.Task.Services.results != undefined && $scope.Task.Services.results.length == 0) {
                setTimeout(function () {
                    breadcrumb();
                }, 2000);
            } else {
                SharewebCommonFactoryService.loadComponentsDataForTasks($scope.Task)
                    .then(function (AllDataMatches) {
                        AllComponentsData = angular.copy(AllDataMatches);
                        breadcrumb();
                    }, function (error) {
                        console.log(error);
                    })
            }
        }
        $scope.ComponentTitle = { STRING: '' }
        $scope.HoverIn = item => {
            $scope.ComponentTitle['STRING'] = '';
            $scope.ComponentTitle['STRING'] = $.grep(AllComponentsData, val => { return val.Id == item.Id })[0];
            if ($scope.ComponentTitle['STRING'].Item_x0020_Type == 'Component') {
                $scope.ComponentTitle['STRING'] = $scope.ComponentTitle['STRING'].Title;
            } else if ($scope.ComponentTitle['STRING'].Item_x0020_Type == 'SubComponent') {
                var str = $scope.ComponentTitle['STRING'].Title;
                $scope.ComponentTitle['STRING'] = $.grep(AllComponentsData, val => { return val.Id == $scope.ComponentTitle['STRING'].Parent.Id })[0];
                $scope.ComponentTitle['STRING'] = $scope.ComponentTitle['STRING'].Title + ' > ' + str;
            } else if ($scope.ComponentTitle['STRING'].Item_x0020_Type == 'Feature') {
                var str = $scope.ComponentTitle['STRING'].Title;
                $scope.ComponentTitle['STRING'] = $.grep(AllComponentsData, val => { return val.Id == $scope.ComponentTitle['STRING'].Parent.Id })[0];
                str = $scope.ComponentTitle['STRING'].Title + ' > ' + str;
                $scope.ComponentTitle['STRING'] = $.grep(AllComponentsData, val => { return val.Id == $scope.ComponentTitle['STRING'].Parent.Id })[0];
                $scope.ComponentTitle['STRING'] = $scope.ComponentTitle['STRING'].Title + ' > ' + str;
            }
        }
        $scope.allDataOfTask = [];
        const getAllTaskData = function () {
            if ($scope.site == 'Offshore Tasks') {

            }
            var listId = SharewebCommonFactoryService.getListIdByListName($scope.site, $scope.CurrentSiteType);
            SharewebListService.getRequest(_spPageContextInfo.webAbsoluteUrl, "/getbyid('" + listId + "')/items?$select=Shareweb_x0020_ID,SharewebTaskType/Id,SharewebTaskType/Title,Team_x0020_Members/Id,Team_x0020_Members/Title,Team_x0020_Members/Name,AssignedTo/Title,AssignedTo/Name,AssignedTo/Id,AttachmentFiles/FileName,Component/Id,Component/Title,Component/ItemType,Services/Id,Services/Title,Services/ItemType,OffshoreComments,Portfolio_x0020_Type,Categories,FeedBack,component_x0020_link,FileLeafRef,Title,Id,Comments,CompletedDate,StartDate,DueDate,Status,Body,Company,Mileage,PercentComplete,FeedBack,Attachments,Priority,Created,Modified,BasicImageInfo,SharewebCategories/Id,SharewebCategories/Title,Author/Id,Author/Title,Editor/Id,Editor/Title,Events/Id,Events/Title,Events/ItemType,SharewebTaskLevel1No,SharewebTaskLevel2No,ParentTask/Id,ParentTask/Title,Responsible_x0020_Team/Id,Responsible_x0020_Team/Title,Responsible_x0020_Team/Name&$expand=Responsible_x0020_Team,ParentTask,AssignedTo,Component,Services,Events,AttachmentFiles,Author,Team_x0020_Members,Editor,SharewebCategories,SharewebTaskType&$filter=(SharewebTaskType/Title eq 'Activities') or (SharewebTaskType/Title eq 'Workstream') or (SharewebTaskType/Title eq 'Task')&$top=4999").then(function (success) {
                angular.forEach(success.d.results, function (item) {
                    item.siteType = $scope.site;
                    item.isLastNode = false;
                    $scope.allDataOfTask.push(item);
                })
                setTimeout(function () {
                    jQuery(document).ready(function () {
                        jQuery("#sit-sharewebImagePopup-demo .sit-preview").sharewebImageTooltip({ previewTemplate: "sharewebImagePopup", imageWidth: "700px" });
                    });
                }, 100);

                if ($scope.Task != undefined) {
                    loadOtherDetailsForComponents();
                }
                console.log($scope.allDataOfTask);
            }, function (error) {

            });
        }
        $scope.showCommentBox = function (descriptionItem) {
            descriptionItem.isShowComment = true;
        }


        $scope.EditTask = function (item, TimetabTask) {
            SharewebCommonFactoryService.showProgressBar();
            var query = '';
            query += "Shareweb_x0020_ID,FolderID,SharewebTaskType/Id,SharewebTaskType/Title,Team_x0020_Members/Id,Team_x0020_Members/Title,Team_x0020_Members/Name,AssignedTo/Title,AssignedTo/Name,AssignedTo/Id,AttachmentFiles/FileName,Component/Id,Component/Title,Component/ItemType,Services/Id,Services/Title,Services/ItemType,OffshoreComments,ParentTask/Id,ParentTask/Title,Portfolio_x0020_Type,Categories,FeedBack,component_x0020_link,FileLeafRef,Title,Id,Comments,CompletedDate,StartDate,DueDate,Status,Body,Company,Mileage,PercentComplete,FeedBack,Attachments,Priority,Created,Modified,BasicImageInfo,SharewebCategories/Id,SharewebCategories/Title,Author/Id,Author/Title,Editor/Id,Editor/Title,Events/Id,Events/Title,Responsible_x0020_Team/Id,Responsible_x0020_Team/Title,Responsible_x0020_Team/Name&$expand=Responsible_x0020_Team,ParentTask,AssignedTo,Component,Services,Events,AttachmentFiles,Author,Team_x0020_Members,Editor,SharewebCategories,SharewebTaskType&$filter=Id eq " + item.Id; // ,ParentID/ID,ParentID/Title ParentID,
            SharewebListService.getRequest($scope.CurrentSiteUrl, "/getbyid('" + $scope.listId + "')/items?$select=" + query)
                .then(function (response) {
                    item = response.d.results[0];
                    item.siteType = $scope.site;
                    var listId = $scope.listId;
                    var imagedetails = {};
                    angular.forEach($scope.SitesConfig, function (site) {
                        if (item.siteType != undefined && item.siteType == site.Title) {
                            imagedetails = site;
                        }
                    });
                    setTimeout(function () {
                        $rootScope.modalInstance = $uibModal.open({
                            templateUrl: _spPageContextInfo.siteAbsoluteUrl + '/Style%20Library/js/angular/Templates/HCTaskManagement.html',
                            controller: 'HCTaskManagementController',
                            backdrop: "static",
                            size: 'lg'
                        });
                        $rootScope.modalInstance.item = item;
                        $rootScope.modalInstance.TimetabTask = TimetabTask;
                        $rootScope.modalInstance.SiteImage = imagedetails;
                        $rootScope.modalInstance.listId = listId;
                        // $rootScope.modalInstance.isShowApprovalButtons = $scope.isShowApprovalButtons
                        $rootScope.modalInstance.EditItemCallBack = $scope.EditItemCallBack;
                        $rootScope.modalInstance.DeleteCallBack = $scope.DeleteCallBack;
                    }, 10);
                }, function (error) { });
        };
        $scope.DeleteCallBack = function (Item) {
            if (Item.Id == $scope.Task.Id) {
                $scope.Task = undefined;
            }
        }
        $scope.deleteitem = function (item, array) {
            var listId = SharewebCommonFactoryService.getListIdByListName(item.siteType, _spPageContextInfo.webServerRelativeUrl.toLowerCase());
            SharewebCommonFactoryService.removeItem(listId, item.Id, _spPageContextInfo.webAbsoluteUrl.toLowerCase(), "").then(function () {
                angular.forEach(array, function (olditem, index) {
                    if (olditem.siteType == item.siteType && olditem.Id == item.Id) {
                        array.splice(index, 1);
                    }
                });
            }, function (error) {
                console.log(error);
            });
        }

        $scope.removeItem = function (itemId, items) {
            SharewebCommonFactoryService.removeItem($scope.listId, itemId, $scope.CurrentSiteUrl, "")
                .then(function (data) {
                    angular.forEach(items, function (item, index) {
                        if (item.Id == itemId) {
                            //  confirm("Are you sure, you want to delete this?");
                            items.splice(index, 1);
                        }
                    });
                })
        }
        const split = val => {
            return val.split(/;\s*/);
        }
        const extractLast = function (term) {
            return split(term).pop();
        }
        $scope.split = function (val) {
            return val.split(/;\s*/);
        }
        $scope.extractLast = function (term) {
            return split(term).pop();
        }
        /*-----------------------------------------------------------END----------------------------------*/
        $scope.isSiteOwner = function () {
            SharewebCommonFactoryService.IsCurrentUserSiteOwner()
                .then(function (IsSiteAdmin) {
                    $scope.isOwner = IsSiteAdmin;
                });
        }
        $scope.isMemberSiteOwner = function () {
            SharewebCommonFactoryService.IsCurrentMemberSiteOwner()
                .then(function (IsMemberOwner) {
                    $scope.isMemberOwner = IsMemberOwner;
                });
        }
        //Start of getting existing data into text box
        $scope.TaskprofileId = SharewebCommonFactoryService.getParameterByName('taskId').trim();
        $scope.listId = SharewebCommonFactoryService.getListIdByListName($scope.site, $scope.CurrentSiteType);
        $scope.CurrentSiteUrl = SharewebCommonFactoryService.CurrentSiteUrlType($scope.CurrentSiteType);
        $scope.Taskuserconfiguration = function () {
            keyName = 'SP-TaskUser-Management'
            SharewebListService.getRequest(GlobalConstants.ADMIN_SITE_URL, "/getbyid('" + GlobalConstants.SHAREWEB_ADMIN_CONFIGURATIONS_LISTID + "')/items?$select=Id,Title,Value,Key,Description,Configurations&$filter=Key eq '" + keyName + "'")
                .then(function (data) {
                    $scope.siteConfig = SharewebCommonFactoryService.parseJSON(data.d.results[0].Configurations);
                    angular.forEach($scope.siteConfig, function (user) {
                        if (user.Title == 'sp') {
                            $scope.ListId = user.listId;
                            $scope.Siteurl = user.siteUrl;
                            $scope.LoadAllTaskUsers(user);
                        }
                    });
                },
                    function (error) {
                        alert(JSON.stringify(data));



                    });
        }
        $scope.LoadAllTaskUsers = function (user) {
            var userid = _spPageContextInfo.userId;
            $scope.Currentuser = false;
            SharewebListService.getRequest($scope.baseUrl + user.siteUrl, "/getbyid('" + user.listId + "')/items?$select=" + user.query + " ")
                .then(function (data) {
                    angular.forEach(data.d.results, function (user) {
                        if (user.AssingedToUser != undefined)
                            if (user.AssingedToUser.Id == userid && user.Company == 'Smalsus') {
                                $scope.Currentuser = true;
                            }
                    });
                },
                    function (data) {

                    });
        }
        $scope.Taskuserconfiguration();
        $scope.BasicImageInfo = [];

        const getFolderDetails = function () {
            SharewebListService.getRequest(_spPageContextInfo.webAbsoluteUrl, "/getbyid('" + GlobalConstants.SPONLINE_DOCUMENT_LISTID + "')/items?$select=Id,Title,FileDirRef,FileLeafRef,ServerUrl,FSObjType,EncodedAbsUrl&$filter=Id eq '" + $scope.Task.FolderID + "'")
                .then(function (data) {
                    $scope.Folders = data.d.results[0];
                    console.log($scope.Folders);

                }, function (error) { });
        }
        $scope.LinkTask = function () {

        }
        $scope.GenerateTabTitleandIcon = function (Task) {
            var TaskId = SharewebCommonFactoryService.getSharewebId(Task);
            document.title = TaskId + ' - ' + Task.Title;
            var iconUrl = "/SiteCollectionImages/ICONS/Shareweb/site_" + Task.siteType + ".png"
            if (Task.siteType == 'Gruene')
                iconUrl = "/SiteCollectionImages/ICONS/Foundation/logo-gruene.png"
            else if (Task.siteType == 'HHHH')
                iconUrl = "/SiteCollectionImages/ICONS/Foundation/icon_hhhh.png"
            else if (Task.siteType == 'Small Projects')
                iconUrl = "/SiteCollectionImages/ICONS/Shareweb/small_project.png"
            else if (Task.siteType == 'Offshore Tasks')
                iconUrl = "/SiteCollectionImages/ICONS/Shareweb/offshore_Tasks.png"

            $("#favicon").attr("href", iconUrl);
        }
        $scope.GetTask = function () {
            var itemId = SharewebCommonFactoryService.getParameterByName('taskId');
            var query = '';
            var query1 = '';

            $scope.site == "Master Tasks" ? query += "Item_x0020_Type,Site," : "";
            query += "Shareweb_x0020_ID,FolderID,ItemRank,TestCaseJson,SharewebTaskLevel1No,SharewebTaskLevel2No,SharewebTaskType/Id,SharewebTaskType/Title,Team_x0020_Members/Id,Team_x0020_Members/Title,Team_x0020_Members/Name,AssignedTo/Title,AssignedTo/Name,AssignedTo/Id,AttachmentFiles/FileName,Component/Id,Component/Title,Component/ItemType,Services/Id,Services/Title,Services/ItemType,OffshoreComments,ClientActivity,ClientActivityJson,OffshoreImageUrl,ParentTask/Id,ParentTask/Title,Portfolio_x0020_Type,Categories,FeedBack,component_x0020_link,FileLeafRef,Title,Id,Comments,CompletedDate,StartDate,DueDate,Status,Body,Company,Mileage,PercentComplete,FeedBack,Attachments,Priority,Created,Modified,BasicImageInfo,SharewebCategories/Id,SharewebCategories/Title,Author/Id,Author/Title,Editor/Id,Editor/Title,ClientCategory/Id,ClientCategory/Title,RelevantTasks/Id,RelevantTasks/Title,Responsible_x0020_Team/Id,Responsible_x0020_Team/Title,Responsible_x0020_Team/Name&$expand=Responsible_x0020_Team,RelevantTasks,ParentTask,AssignedTo,Component,Services,ClientCategory,AttachmentFiles,Author,Team_x0020_Members,Editor,SharewebCategories,SharewebTaskType&$filter=Id eq " + itemId; // ,ParentID/ID,ParentID/Title ParentID,
            SharewebListService.getRequest($scope.CurrentSiteUrl, "/getbyid('" + $scope.listId + "')/items?$select=" + query)
                .then(function (response) {
                    $scope.TaskListID = $scope.listId;
                    $scope.AllLinkedTask = [];
                    $scope.AlllinkedTask1 = [];
                    $scope.Replies = [];
                    $scope.DescriptionFields = [];
                    $scope.OffshoreCommentsFields = [];
                    $scope.OffshoreImageUrlFields = [];
                    $scope.Task = response.d.results[0];
                    $scope.Task.Events = { results: [] };

                    $scope.listMetaData = $scope.Task.__metadata.type;
                    $scope.ClienCategory = '';
                    angular.forEach($scope.Task.ClientCategory.results, function (cate) {
                        $scope.ClienCategory += cate.Title + ';';
                    })

                    if ($scope.Task.TestCaseJson != undefined) {
                        $scope.Testcasejson = SharewebCommonFactoryService.parseJSON($scope.Task.TestCaseJson);
                    }
                    $scope.PortfolioType = 'Component';
                    if ($scope.Task.Component.results != undefined && $scope.Task.Component.results.length > 0) {
                        $scope.PortfolioType = 'Component';
                        $scope.Task.Portfolio_x0020_Type = 'Component';
                    }
                    else if ($scope.Task.Services.results != undefined && $scope.Task.Services.results.length > 0) {
                        $scope.PortfolioType = 'Service';
                        $scope.Task.Portfolio_x0020_Type = 'Service';
                    }
                    else if ($scope.Task.Events != undefined && $scope.Task.Events.results != undefined && $scope.Task.Events.results.length > 0) {
                        $scope.PortfolioType = 'Events';
                        $scope.Task.Portfolio_x0020_Type = 'Events';
                    }
                    else {
                        $scope.PortfolioType = 'Component';
                        $scope.Task.Portfolio_x0020_Type = 'Component';
                    }
                    angular.forEach($scope.taskUsers, function (updateduser) {
                        if (updateduser.AssingedToUserId == $scope.Task.Author.Id) {
                            $scope.Task.Author.Title = updateduser.Title;
                        }
                        if (updateduser.AssingedToUserId == $scope.Task.Editor.Id) {
                            $scope.Task.Editor.Title = updateduser.Title;
                        }
                    })
                    if ($scope.Task.ClientActivityJson != undefined) {
                        $scope.Task.ClientActivityJson = JSON.parse($scope.Task.ClientActivityJson);
                    }
                    if ($scope.Task != undefined && $scope.Task.ClientActivityJson != undefined && $scope.Task.ClientActivityJson.length > 0) {
                        angular.forEach($scope.Task.ClientActivityJson, function (newitem) {
                            newitem.ClientSite = newitem.ClientSite.toLowerCase();
                            if (newitem.ClientSite == 'eps') {
                                newitem['SiteIcon'] = $scope.baseUrl + '/SiteCollectionImages/ICONS/Shareweb/site_eps.png';
                            }
                            if (newitem.ClientSite == 'ei') {
                                newitem['SiteIcon'] = $scope.baseUrl + '/SiteCollectionImages/ICONS/Shareweb/site_ei.png';
                            }
                            if (newitem.ClientSite == 'qa') {
                                newitem['SiteIcon'] = $scope.baseUrl + '/SiteCollectionImages/ICONS/Shareweb/site_qa.png';
                            }
                            if (newitem.ClientSite == 'gender') {
                                newitem['SiteIcon'] = $scope.baseUrl + '/SiteCollectionImages/ICONS/Shareweb/site_gender.png';
                            }
                            if (newitem.ClientSite == 'education') {
                                newitem['SiteIcon'] = $scope.baseUrl + '/SiteCollectionImages/ICONS/Shareweb/site_education.png';
                            }
                            if (newitem.ClientSite == 'development-effectiveness' || newitem.ClientSite == 'de') {
                                newitem['SiteIcon'] = $scope.baseUrl + '/SiteCollectionImages/ICONS/Shareweb/site_de.png';
                            }
                            if (newitem.ClientSite == 'cep' || newitem.ClientSite == 'CEP') {
                                newitem['SiteIcon'] = $scope.baseUrl + '/SiteCollectionImages/ICONS/Shareweb/icon_cep.png';
                            }
                        })
                    }
                    if ($scope.Task.ClientActivity != undefined) {
                        $scope.Task.ClientActivity = JSON.parse($scope.Task.ClientActivity);
                    }
                    if ($scope.Task != undefined && $scope.Task.ClientActivity != undefined && $scope.Task.ClientActivity.length > 0) {
                        angular.forEach($scope.Task.ClientActivity, function (newitem) {
                            newitem.Site = newitem.Site.toLowerCase();
                            if (newitem.Site == 'eps') {
                                newitem['SiteIcon'] = $scope.baseUrl + '/SiteCollectionImages/ICONS/Shareweb/site_eps.png';
                            }
                            if (newitem.Site == 'ei') {
                                newitem['SiteIcon'] = $scope.baseUrl + '/SiteCollectionImages/ICONS/Shareweb/site_ei.png';
                            }
                            if (newitem.Site == 'qa') {
                                newitem['SiteIcon'] = $scope.baseUrl + '/SiteCollectionImages/ICONS/Shareweb/site_qa.png';
                            }
                            if (newitem.Site == 'gender') {
                                newitem['SiteIcon'] = $scope.baseUrl + '/SiteCollectionImages/ICONS/Shareweb/site_gender.png';
                            }
                            if (newitem.Site == 'education') {
                                newitem['SiteIcon'] = $scope.baseUrl + '/SiteCollectionImages/ICONS/Shareweb/site_education.png';
                            }
                            if (newitem.Site == 'development-effectiveness' || newitem.Site == 'de') {
                                newitem['SiteIcon'] = $scope.baseUrl + '/SiteCollectionImages/ICONS/Shareweb/site_de.png';
                            }
                            if (newitem.Site == 'cep' || newitem.Site == 'CEP') {
                                newitem['SiteIcon'] = $scope.baseUrl + '/SiteCollectionImages/ICONS/Shareweb/icon_cep.png';
                            }
                            if (newitem.Site == 'shareweb') {
                                newitem['SiteIcon'] = $scope.baseUrl + '/SiteCollectionImages/ICONS/Shareweb/site_shareweb.png';
                            }
                        })
                    }
                    if ($scope.Task.RelevantTasks != undefined && $scope.Task.RelevantTasks.results != undefined) {
                        var counter = 0;
                        angular.forEach($scope.Task.RelevantTasks.results, function (linekdItem) {
                            query1 = "Title,Id,Shareweb_x0020_ID,DueDate,Status,PercentComplete,SharewebTaskLevel1No,SharewebTaskLevel2No,SharewebTaskType/Id,SharewebTaskType/Title,Component/Id,Component/Title,Component/ItemType,Services/Id,Services/Title,Services/ItemType,Events/Id,Events/Title,Team_x0020_Members/Id,Team_x0020_Members/Title,Team_x0020_Members/Name,AssignedTo/Title,AssignedTo/Name,AssignedTo/Id,Responsible_x0020_Team/Id,Responsible_x0020_Team/Title,Responsible_x0020_Team/Name&$expand=Responsible_x0020_Team,SharewebTaskType,Component,Services,Events,Team_x0020_Members,AssignedTo&$filter=Id eq " + linekdItem.Id; // ,ParentID/ID,ParentID/Title ParentID,
                            SharewebListService.getRequest($scope.CurrentSiteUrl, "/getbyid('" + $scope.listId + "')/items?$select=" + query1)
                                .then(function (response) {
                                    counter++;
                                    if (response.d.results.length > 0)
                                        $scope.AlllinkedTask1.push(response.d.results[0]);
                                    if ($scope.Task.RelevantTasks.results.length == counter) {
                                        angular.forEach($scope.AlllinkedTask1, function (linkTask) {
                                            linkTask.siteType = $scope.site;
                                            linkTask.Shareweb_x0020_ID = SharewebCommonFactoryService.getSharewebId(linkTask);
                                            if (linkTask.DueDate != undefined && linkTask != null)
                                                linkTask.DueDate = new Date(linkTask.DueDate).format('dd/MM/yyyy');
                                            if (linkTask.PercentComplete != undefined && linkTask.PercentComplete < 1)
                                                linkTask.PercentComplete = linkTask.PercentComplete * 100;
                                            $scope.AllLinkedTask.push(linkTask);
                                        })
                                    }
                                }, function (error) {
                                    console.log(error);
                                });
                        })
                    }
                    $scope.Task.isLastNode = false;
                    if ($scope.Task.PercentComplete != undefined) {
                        $scope.Task.PercentComplete = parseInt(($scope.Task.PercentComplete * 100).toFixed(0));
                    }
                    if ($scope.Task.Categories != undefined && $scope.Task.Categories.toLowerCase().indexOf('draft') > -1) {
                        if ($scope.Task.Responsible_x0020_Team != undefined && $scope.Task.Responsible_x0020_Team.results != undefined && $scope.Task.Responsible_x0020_Team.results.length > 0) {
                            angular.forEach($scope.Task.Responsible_x0020_Team.results, function (user) {
                                if ((user.Id == 32 && _spPageContextInfo.userId == 32) || (user.Id == 36 && _spPageContextInfo.userId == 36)) {
                                    $scope.isShowApprovalButtons = true;
                                }
                            });
                        }
                    }
                    //if ($scope.Task.Categories != undefined && $scope.Task.Categories.toLowerCase().indexOf('approval') > -1) {
                    //    if ($scope.Task.AssignedTo != undefined && $scope.Task.AssignedTo.results != undefined && $scope.Task.AssignedTo.results.length > 0) {
                    //        angular.forEach($scope.Task.AssignedTo.results, function (user) {
                    //            if ((user.Id ==  _spPageContextInfo.userId)) {
                    //                $scope.isShowApprovalButtons = true;
                    //            }
                    //        });
                    //    }
                    //}
                    if ($scope.Task.PercentComplete != undefined && $scope.Task.PercentComplete == 1) {
                        if ($scope.Task.AssignedTo != undefined && $scope.Task.AssignedTo.results != undefined && $scope.Task.AssignedTo.results.length > 0) {
                            angular.forEach($scope.Task.AssignedTo.results, function (user) {
                                if ((user.Id == _spPageContextInfo.userId)) {
                                    $scope.isShowApprovalButtons = true;
                                }
                            });
                        }
                    }
                    $scope.getAttachedFiles($scope.Task);
                    $scope.getLookupListColumn = function () {
                        $scope.main_item_listId = SharewebCommonFactoryService.getListIdByListName($scope.ListNameQuery, GlobalConstants.CURRENT_SITE_TYPE)
                        SharewebListService.getRequest(GlobalConstants.ADMIN_SITE_URL, "/getbyid('" + GlobalConstants.ADMIN_DOCUMEMNT_LISTID + "')/fields")
                            .then(function (data) {
                                angular.forEach(data.d.results, function (item) {
                                    if (item.LookupList) {
                                        var listID = item.LookupList;
                                        try {
                                            listID = listID.split('{')[1].split('}')[0]
                                            if (listID.toLowerCase() == $scope.main_item_listId.toLowerCase()) {
                                                $scope.LookupColumn = item.InternalName;
                                                $scope.loadAllSitesDocuments();
                                            }
                                        } catch (e) { }
                                    }
                                })
                            })
                    }
                    if ($scope.Task.OffshoreComments != undefined) {
                        $scope.OffshoreCommentItems = SharewebCommonFactoryService.parseJSON($scope.Task.OffshoreComments);
                        angular.forEach($scope.OffshoreCommentItems, function (items) {

                            if (items.Body != undefined) {
                                items.AuthorImage = items.AuthorImage.replace("https://www.hochhuth-consulting.de/sp", $scope.SubSiteURL);
                                $scope.OffshoreCommentsFields.push(items);
                            }
                            items.Created = SharewebCommonFactoryService.ConvertLocalTOServerDate(items.Created, "DD/MM/YYYY");
                        });
                    }
                    if ($scope.Task.OffshoreImageUrl != undefined) {
                        $scope.selectedoffshoreImageUrl = SharewebCommonFactoryService.parseJSON($scope.Task.OffshoreImageUrl);
                        angular.forEach($scope.selectedoffshoreImageUrl, function (items) {
                            if (items.Url != undefined) {
                                items.Url = items.Url.replace("https://www.hochhuth-consulting.de/sp", $scope.SubSiteURL);
                                items.UserImage = items.UserImage.replace("https://www.hochhuth-consulting.de/sp", $scope.SubSiteURL);
                                $scope.OffshoreImageUrlFields.push(items);
                            }
                        });
                    }
                    $scope.Task.siteType = $scope.site;
                    $scope.GenerateTabTitleandIcon($scope.Task);
                    $scope.Task.Shareweb_x0020_ID = SharewebCommonFactoryService.getSharewebIdBreadcrumb($scope.Task);
                    $scope.GenerateTabTitleandIcon($scope.Task);
                    if ($scope.Task.Component.results.length > 0) {
                        angular.forEach($scope.Task.Component.results, function (type) {
                            type.siteType = 'Master Tasks';
                        });
                    }
                    if ($scope.Task.Services.results.length > 0) {
                        angular.forEach($scope.Task.Services.results, function (types) {
                            types.siteType = 'Master Tasks';
                        });
                    }
                    $scope.attachedFileName = $scope.Task.AttachmentFiles.results.FileName;
                    if ($scope.Task.DueDate != undefined)
                        $scope.DueDate = new Date($scope.Task.DueDate).format('dd/MM/yyyy');

                    if ($scope.Task.StartDate != undefined)
                        $scope.StartDate = new Date($scope.Task.StartDate).format('dd/MM/yyyy');

                    if ($scope.Task.CompletedDate != undefined)
                        $scope.CompletedDate = new Date($scope.Task.CompletedDate).format('dd/MM/yyyy');
                    $scope.Task.CreatedDate = new Date($scope.Task.Created).format('dd/MM/yyyy HH:mm:ss');
                    $scope.Task.DateCreated = SharewebCommonFactoryService.ConvertLocalTOServerDate($scope.Task.Created, 'DD MMM YYYY HH:mm');
                    $scope.Task.DatedCreated = new Date($scope.Task.Created).format('dd/MM/yyyy');
                    $scope.Task.Modified = SharewebCommonFactoryService.ConvertLocalTOServerDate($scope.Task.Modified, 'DD MMM YYYY HH:mm');
                    $scope.Task.Created
                    $scope.CategoriesTitle = '';
                    if ($scope.Task.SharewebCategories.results.length > 0) {
                        angular.forEach($scope.Task.SharewebCategories.results, function (item) {
                            $scope.CategoriesTitle = $scope.CategoriesTitle + ' ' + item.Title + ';';
                        })
                    }
                    if ($scope.Task.component_x0020_link != undefined) {
                        $scope.Task.Description = $scope.Task.component_x0020_link.Description;
                    }
                    $scope.AllCommentDetails = [];
                    $scope.AllCommentDetails.Comments = [];
                    $scope.AllCommentDetails.OtherComments = [];
                    if ($scope.Task.Comments != 'null' && $scope.Task.Comments != null && $scope.Task.Comments != '[]') {
                        $scope.AllCommentDetails.Comments = SharewebCommonFactoryService.parseJSON($scope.Task.Comments);
                    }
                    $scope.AllCommentDetails.OtherComments = angular.copy($scope.AllCommentDetails.Comments);
                    angular.forEach($scope.AllCommentDetails.OtherComments, item => {
                        if (item.Created != undefined) {
                            var dateE = new Date(item.Created);
                            item.NewestCreatedDate = dateE.setDate(dateE.getDate());
                        }
                    })
                    if ($scope.Task.FeedBack != undefined) {
                        angular.forEach(SharewebCommonFactoryService.parseJSON($scope.Task.FeedBack)[0].FeedBackDescriptions, function (item) {
                            item.isShowComment = false;
                            $scope.DescriptionFields.push(item);
                            if (item.Subtext != undefined) {
                                angular.forEach(item.Subtext, function (sub) {
                                    sub.isShowComment = false;
                                })
                            }
                        })

                        var commentItem = [];
                        angular.forEach($scope.DescriptionFields, function (comments, index) {
                            try {
                                if (comments.Title != undefined) {
                                    comments.Title = comments.Title.replace(/\n/g, '<br/>');
                                }
                            } catch (e) {

                            }
                            angular.forEach(comments.Comments, function (item) {
                                try {
                                    item.Title = item.Title.replace(/\n/g, '<br/>');
                                    item.Created = new Date(item.Created).format('dd MMM yyyy HH:mm');
                                    var dateE = new Date(item.Created);
                                    item.NewestCreated = dateE.setDate(dateE.getDate());
                                    item.AuthorImage = item.AuthorImage.replace("https://www.hochhuth-consulting.de/sp", $scope.SubSiteURL);
                                    commentItem.push(item);
                                } catch (e) {
                                    console.log(e);
                                }
                            });
                            angular.forEach(comments.Subtext, function (item) {
                                try {
                                    item.Title = item.Title.replace(/\n/g, '<br/>');

                                } catch (e) {
                                    console.log(e);
                                }
                            });
                            $scope.DescriptionFields.Comments = angular.copy(commentItem);
                        });
                    }
                    if ($scope.Task.BasicImageInfo != undefined) {
                        try {
                            $scope.BasicImageInfo = SharewebCommonFactoryService.parseJSON($scope.Task.BasicImageInfo);
                        } catch (e) {
                            console.log(e);
                        }
                    }
                    if ($scope.Task.FolderID != undefined) {
                        getFolderDetails();
                    }

                    $scope.getLookupListColumn();
                    if ($scope.allDataOfTask.length > 0) {
                        loadOtherDetailsForComponents();
                    }
                    $scope.loadSPComponentsListData();
                    if ($scope.Newtimentry == "true" && $scope.Task != undefined) {
                        $scope.EditTask($scope.Task, 'TaskTimeTab');
                    }
                    if ($scope.ApprovedRejectType != '' && IsPageLoad && $scope.isShowApprovalButtons) {
                        IsPageLoad = false;
                        $scope.ApprovalRejectTask($scope.ApprovedRejectType);
                    }
                    $scope.$broadcast('TeamDetails', $scope.Task);
                    $timeout(function () {
                        console.log("broadcasted...!!!");
                        $scope.$broadcast('ProfileDetails', $scope.Task);
                    }, 3000);
                }, function (error) { });
        };
        // End of getting existing data into text box
        $scope.getAttachedFiles = function (item) {
            $scope.attachments = item.AttachmentFiles.results;
            $scope.attachedItemId = item.Id;
        };
        $scope.Redirecturl = function (Id, sitetype) {
            if (sitetype != "" && (sitetype == 'CEP' || sitetype == 'cep')) {
                window.open("https://www.shareweb.ch/site/eps/" + sitetype + "/Pages/Manage/TaskProfile.aspx?TaskId=" + Id, "_blank");
            }
            if (sitetype != "") {
                window.open("https://www.shareweb.ch/site/" + sitetype + "/team/Pages/Manage/TaskProfile.aspx?TaskId=" + Id, "_blank");
            }
        }
        $scope.Redirecturlnew = function (urltypetype) {
            if (urltypetype != undefined) {
                window.open(urltypetype, "_blank");
            }
        }
        $scope.loadTaskCategories = function () {
            SharewebListService.getRequest(GlobalConstants.ADMIN_SITE_URL, "/getbyid('" + GlobalConstants.ADMIN_TASK_USERS_LISTID + "')/items")
                .then(function (data) {
                    $scope.Categories = data.d.results;
                    $scope.TeamMembers = data.d.results;
                    console.log($scope.Categories);
                },
                    function (error) {
                        alert(JSON.stringify(data));
                    });
        };
        $scope.editCategories = function (userId) {
            if ($scope.userIds.indexOf(userId) > -1) {
                $scope.userIds.splice($scope.userIds.indexOf(userId), 1);
            } else
                $scope.userIds[$scope.userIds.length] = userId;
        };
        $scope.LoadAllMetaData = function () {
            $scope.SitesConfig = [];
            SharewebCommonFactoryService.LoadAllMetaData()
                .then(function (AllMetaData) {
                    $scope.SitesConfig = SharewebCommonFactoryService.getSmartMetadataItemsByTaxType(AllMetaData, 'Sites');
                },
                    function (data) {

                    });
        }

        $scope.LoadAllMetaData();
        $scope.changetoSubcomp = function () {
            $scope.suggestionBoxCollec = [];
            $scope.suggestionBoxCollec = angular.copy($scope.allFamilyStructureOfItem);
        }

        $scope.ChanngetoFeature = function () {
            $scope.suggestionBoxCollec = [];
            angular.forEach($scope.allFamilyStructureOfItem, function (item) {
                angular.forEach(item.childs, function (value) {
                    if (value.siteType != undefined && value.siteType == 'Master Tasks')
                        $scope.suggestionBoxCollec.push(value);
                })
            })
        }
        initLoading();
        $scope.loadAllTaskUsers = function () {
            SharewebListService.getRequest(GlobalConstants.ADMIN_SITE_URL, "/getbyid('" + GlobalConstants.ADMIN_TASK_USERS_LISTID + "')/items?$select=Id,Title,Approver/Id,Approver/Title,Approver/Name,AssingedToUserId,AssingedToUser/Title,AssingedToUser/Id,AssingedToUser/EMail,ItemType&$expand=AssingedToUser,Approver") //& $filter=Status eq '" + $scope.test + "'
                .then(function (data) {
                    $scope.AllUser = data.d.results;
                },
                    function (error) {
                        alert(JSON.stringify(data));

                    });
        };
        $scope.loadAllTaskUsers();
        $scope.loadTaskUsers = function () {
            SharewebListService.getRequest(GlobalConstants.ADMIN_SITE_URL, "/getbyid('" + GlobalConstants.ADMIN_TASK_USERS_LISTID + "')/items") //& $filter=Status eq '" + $scope.test + "'
                .then(function (data) {
                    $scope.TaskUsers = data.d.results;
                    $scope.taskUsers = data.d.results;
                },
                    function (error) {
                        alert(JSON.stringify(data));

                    });
        };
        $scope.loadTaskUsers();
        $scope.closeTaskTable = function () {
            $('#TaggedTasksTable').hide();
            $('#TaskTableButton').hide();
        }

        $scope.TagItems = function () {
            $scope.isRefreshParent = true;
            $('#TagProjects').show();
            var scope = angular.element($('#SharewebAddAndConnectToolId')).scope();
            if (scope != undefined)
                scope.init($scope.Task, 'TaskProfile');


        }
        $scope.$on('BroadCastProfileDetails', function (ev, ProfileItem) {
            console.log('emit triggered in edit profile.');
            SharewebCommonFactoryService.showProgressBar();
            $scope.EditProfileItemCallBack();
        })
        $scope.EditProfileItemCallBack = function () {
            $scope.Task.isRefresh = true;
            $scope.Task.ProfileType = 'TaskProfile';
            $scope.Task.termSetName = 'Tasks';
            setTimeout(function () {
                $scope.$broadcast('ProfileDetails', $scope.Task);
            }, 10);
            setTimeout(function () { SharewebCommonFactoryService.hideProgressBar(); }, 500);
        }
        $scope.loadAllSitesDocuments = function () {
            var sitesConfig = [{ listId: GlobalConstants.ADMIN_DOCUMEMNT_LISTID, siteUrl: GlobalConstants.ADMIN_SITE_URL, siteName: 'sp' }]
            var AllDocuments = [];
            var counter = 0;
            angular.forEach(sitesConfig, function (site) {
                $scope.loadDocuments(site.siteUrl, site.listId)
                    .then(function (Documents) {
                        counter++;
                        angular.forEach(Documents, function (doc) {
                            AllDocuments.push(doc);
                        })
                        if (AllDocuments.length > 0) {
                            angular.forEach(sitesConfig, function (config) {
                                if (AllDocuments[0].siteType == config.siteName) {
                                    config.Count = Documents.length;
                                }
                            });
                        }
                        if (sitesConfig.length == counter) {
                            console.log('documents loaded');
                            $scope.AllDocuments = angular.copy(AllDocuments);
                            $scope.$broadcast('ProfileDetails', $scope.Task);
                        }
                    });
            })
        }
        $scope.loadDocuments = function (siteUrl, listId) {
            var deferred = $q.defer();
            var query = 'Id,Title,Tasks,Priority_x0020_Rank,Year,File_x0020_Type,FileLeafRef,FileDirRef,Item_x0020_Rank,ItemType,Url,Created,Modified,Author/Id,Author/Title,Editor/Id,Editor/Title,EncodedAbsUrl&$expand=Author,Editor&$filter=' + $scope.LookupColumn + '/Id eq ' + SharewebCommonFactoryService.getParameterByName('taskId') + '&$top=5000';
            SharewebListService.getRequest(siteUrl, "/getbyid('" + listId + "')/items?$select=" + query)
                .then(function (data) {
                    Items = data.d.results;
                    var Documents = [];
                    angular.forEach(Items, function (doc) {
                        doc.siteType = 'sp';
                        doc.SmartTermName = '';
                        if (doc.File_x0020_Size != undefined) {
                            var size = doc.File_x0020_Size.split(';#')[1];
                            doc.FileSize = SharewebCommonFactoryService.getFileSize(size);
                        }
                        doc.SmartTermName = '';
                        doc.Author = doc.Author.Title;
                        doc.Editor = doc.Editor.Title;
                        doc.ModifiedDate = SharewebCommonFactoryService.ConvertLocalTOServerDate(doc.Modified, 'DD/MM/YYYY HH:mm');
                        if (doc.Url != undefined) {
                            doc.Url = doc.Url.href;
                        }
                        doc.Name = doc.FileLeafRef.substr(0, doc.FileLeafRef.lastIndexOf('.'));
                        doc.Title = $scope.lang == 'Fr' && doc.OtherLanguageTitle != undefined ? doc.OtherLanguageTitle : doc.Title;
                        doc.FileLeafRef = SharewebCommonFactoryService.removeSpecialCharacters(doc.FileLeafRef);
                        doc.FileDirRef = '/' + SharewebCommonFactoryService.removeSpecialCharacters(doc.FileDirRef);
                        Documents.push(doc);

                    });

                    deferred.resolve(Documents);
                },
                    function (data) {
                        deferred.reject();
                    });
            return deferred.promise;
        }
        $scope.EditItemCallBack = function (updatedTask, cancelItem) {
            // $scope.GetTaskTime1();
            if (cancelItem == 'cancelPopup') {
                setTimeout(function () {
                    $scope.$broadcast('CommentDetails', updatedTask);
                }, 10);
            } else if (cancelItem == undefined || cancelItem != 'cancelPopup') {
                $scope.AllCommentDetails = [];
                $scope.AllCommentDetails.Comments = [];
                $scope.AllCommentDetails.OtherComments = [];
                if (updatedTask.Comments != 'null' && updatedTask.Comments != null && updatedTask.Comments != '[]') {
                    $scope.AllCommentDetails.Comments = SharewebCommonFactoryService.parseJSON(updatedTask.Comments);
                }
                $scope.AllCommentDetails.OtherComments = angular.copy($scope.AllCommentDetails.Comments);
                angular.forEach($scope.AllCommentDetails.OtherComments, item => {
                    if (item.Created != undefined) {
                        var dateE = new Date(item.Created);
                        item.NewestCreatedDate = dateE.setDate(dateE.getDate());
                    }
                })
                if (updatedTask.Id == $scope.Task.Id) {
                    $scope.GetTask();
                    loadOtherDetailsForComponents();
                }
                updatedTask.expanded = false;
                updatedTask.newTitle = updatedTask.Title;
                updatedTask.select = false;
                updatedTask.flag = true;
                updatedTask.Categories = '';
                updatedTask.Portfolio_x0020_Type == $scope.Task.Portfolio_x0020_Type;
                if (updatedTask.SharewebCategories.results != undefined) {
                    if (updatedTask.SharewebCategories.results.length > 0) {
                        angular.forEach(updatedTask.SharewebCategories.results, item => {
                            updatedTask.Categories = updatedTask.Categories + item.Title + ',';
                        })
                    }
                }
                var Category = updatedTask.Categories.split(',')[0];
                updatedTask.Shareweb_x0020_ID = SharewebCommonFactoryService.getSharewebId(updatedTask);
                $scope.$broadcast('TeamDetails', updatedTask);
                setTimeout(function () {
                    $scope.$broadcast('CommentDetails', updatedTask);
                }, 10);
            }
        }
        $scope.isItemExists = function (arr, Id) {
            var isExists = false;
            angular.forEach(arr, function (item) {
                if (item.Id == Id) {
                    isExists = true;
                    return false;
                }
            });
            return isExists;
        }
        $scope.globalItem = {};
        $scope.clearControl = function (cntrlId) {
            $('#' + cntrlId).val('');
            switch (cntrlId) {

                case 'searchLinkTaskId':
                    $scope.searchLinkTaskId = undefined;
                    break;
                case 'searchLinkTaskTitle':
                    $scope.searchLinkTaskTitle = undefined;
                    break;
                case 'LinkTaskStatus':
                    $scope.LinkTaskStatus = undefined;
                    break;
                case 'LinkTaskDueDate':
                    $scope.LinkTaskDueDate = undefined;
                case 'LinkTaskImage':
                    $scope.LinkTaskImage = undefined;
                    break;
                case 'searchcomment':
                    $scope.item.comment = undefined;
                    break;
            }
        }

        $scope.sortBy1 = function (propertyName, order) {
            $scope.orderBy1 = propertyName;
            $scope.reverse1 = order;
        };

        // $scope.GetTaskTime1 = function () {
        //     var itemId = SharewebCommonFactoryService.getParameterByName('taskId');
        //     var site = $scope.site.replace(' ', '');
        //     if (site != undefined && site.toLowerCase() == 'shareweb')
        //         site = site.toLowerCase().replace(/\b[a-z]/g, function (letter) { return letter.toUpperCase(); });
        //     if (site != undefined && site.toLowerCase() == 'sharewebqa') {
        //         site = 'OffshoreTasks';
        //     }
        //     var filteres = "Task" + site + "/Id eq " + itemId;
        //     $scope.smartTermName = "Task" + site;
        //     var select = "Id,Title,TaskDate,Created,Modified,TaskTime,Description,SortOrder,AdditionalTimeEntry,AuthorId,Author/Title,Editor/Id,Editor/Title,Category/Id,Category/Title,TimesheetTitle/Id,TimesheetTitle/Title&$expand=Editor,Author,Category,TimesheetTitle&$filter=" + filteres + "";
        //     SharewebListService.getRequest(GlobalConstants.ADMIN_SITE_URL, "/getbyid('" + GlobalConstants.TASK_TIME_SHEET_LISTID + "')/items?$select=" + select + "")
        //         .then(function (data) {
        //             if ($scope.AllTimeSpentTaskDetails != undefined && $scope.AllTimeSpentTaskDetails.length == 0) {
        //                 $scope.countStartDate = 0;
        //             } else {
        //                 $scope.countStartDate = 1;
        //             }
        //             $scope.AllTimeSpentTaskDetails = data.d.results;
        //             $scope.TotalPercentage = 0
        //             $scope.TotalHours = 0;
        //             $scope.totletimeparentcount = 0;
        //             $scope.AllAvailableTitle = [];
        //             $scope.totalAdditionalTime = [];
        //             angular.forEach($scope.AllTimeSpentTaskDetails, function (item) {
        //                 if (item.TimesheetTitle.Id != undefined) {
        //                     if (item.AdditionalTimeEntry != undefined && item.AdditionalTimeEntry != '') {
        //                         try {
        //                             item.AdditionalTime = JSON.parse(item.AdditionalTimeEntry);
        //                             if (item.AdditionalTime.length > 0) {
        //                                 angular.forEach(item.AdditionalTime, function (additionalTime) {
        //                                     var time = parseFloat(additionalTime.TaskTime)
        //                                     if (!isNaN(time))
        //                                         $scope.totletimeparentcount += time;
        //                                 });
        //                             }

        //                             //$scope.AdditionalTimeSpent.push(item.AdditionalTime[0]);
        //                         } catch (e) {
        //                             console.log(e)
        //                         }
        //                     }
        //                 }
        //             })
        //             var AdditionalTaskTime = angular.copy($.grep($scope.AllTimeSpentTaskDetails, function (type) { return type.TimesheetTitle.Id != undefined }));
        //             $scope.AllTimeusers = [];
        //             angular.forEach(AdditionalTaskTime, function (item) {
        //                 if (item.AdditionalTime != undefined && item.AdditionalTime.length > 0) {
        //                     angular.forEach(item.AdditionalTime, function (additional) {
        //                         $scope.totalAdditionalTime.push(additional);

        //                     })
        //                 }
        //             })
        //             $scope.AllTimeEntries = angular.copy($scope.taskUsers);
        //             angular.forEach($scope.AllTimeEntries, function (user) {
        //                 user['childs'] = [];
        //                 user['TotalTime'] = 0;
        //                 angular.forEach($scope.totalAdditionalTime, function (time) {
        //                     if (user.AssingedToUserId == time.AuthorId) {
        //                         user.AuthorImage = time.AuthorImage
        //                         user['TotalTime'] += parseFloat(time.TaskTime);
        //                         user.childs.push(time);
        //                     }
        //                 })
        //             });
        //             // angular.forEach($scope.totalAdditionalTime,function(item) {

        //             //     angular.forEach($scope.TeamMembers,function(updateitem){
        //             //         if(updateitem.AssingedToUserId == item.AuthorId){
        //             //             var AllTime=parseFloat(item.TaskTime)
        //             //             if(!isNaN(AllTime))
        //             //             $scope.finalTime += AllTime;

        //             //         }
        //             //     })


        //             // })
        //             console.log($scope.AllTimeusers);
        //         },
        //             function (error) {
        //                 alert(JSON.stringify(data));

        //             });

        // };

        //   $scope.GetTaskTime1();

        $scope.editsavecommentTaskProfile = function (reply, hashkey) {
            angular.forEach(reply.Comments, function (item, index) {
                if (item.NewestCreated == hashkey) {
                    $scope.Index = index;
                }
            });
            SharewebCommonFactoryService.bindSummernoteLimited('editComment', reply.Comments[$scope.Index].Title);
            $('#EditcommentTaskProfile').show();
            $scope.editComment = reply;
            $scope.priviousComment = reply.Comments[$scope.Index].Title.replace(/<br\s*[\/]?>/gi, "\n");
        }
        $scope.saveeditcomment = function () {
            $scope.editComment.Comments[$scope.Index].Created =SharewebCommonFactoryService.ConvertLocalTOServerDate(new Date() , 'DD MMM YYYY HH:mm');
            $scope.editComment.Comments[$scope.Index].Title = $scope.priviousComment.replace(/\n/g, '<br/>');
            // $scope.saveEditComment($scope.editComment,'update');
            $('#EditcommentTaskProfile').hide();
            $scope.updateTaskRecords();
        }
        $scope.canceleditcomment = function () {
            $('#EditcommentTaskProfile').hide();

        }
        $scope.PostFeedback = function (item) {
            var FeedBack = {};
            $scope.todayDate = new Date().format('dd/MM/yyyy HH:mm:ss');
            var date = new Date().format('dd MMM yyyy HH:mm');
            var createdDate = SharewebCommonFactoryService.ConvertLocalTOServerDate(date, 'DD MMM YYYY HH:mm');
            FeedBack['Title'] = item.comment.replace(/\n/g, '<br/>');
            FeedBack['Created'] = createdDate;
            var dateE = new Date(FeedBack.Created);
            FeedBack.NewestCreated = dateE.setDate(dateE.getDate());
            FeedBack['editableItem'] = false;
            angular.forEach($scope.TaskUsers, function (taskUser) {
                if (taskUser.AssingedToUserId == _spPageContextInfo.userId) {
                    FeedBack['AuthorName'] = taskUser.Title;
                    FeedBack['AuthorImage'] = taskUser.Item_x0020_Cover != undefined ? taskUser.Item_x0020_Cover.Url : '';
                }
            });
            if (item.Comments == undefined)
                item.Comments = [];
            $scope.Comments = [];
            item.Comments.push(FeedBack);
            item.comment = null;
            $scope.updateTaskRecords();
        }
        $scope.clearComment = function (check, share) {
            angular.forEach(check, function (val, index) {
                if (val.Title == share.Title)
                    check.splice(index, 1);
            })
            $scope.updateTaskRecords();
        }


        $scope.getTaskTotalTime1 = function (Taskitem) {
            Taskitem.selectedSiteType = Taskitem.siteType;
            Taskitem.MileageJson = 0;
            var totletimeparent = 0;
            angular.forEach($scope.AllTimeSpentDetails, function (detail) {
                if (detail['Task' + Taskitem.selectedSiteType] != undefined && detail['Task' + Taskitem.selectedSiteType].Id != undefined && Taskitem.Id != undefined && detail['Task' + Taskitem.selectedSiteType].Id == Taskitem.Id) {
                    if (detail.AdditionalTimeEntry != undefined) {
                        if ($scope.userId == detail.AuthorId) {
                            var Additionaltimeentry = SharewebCommonFactoryService.parseJSON(detail.AdditionalTimeEntry);
                            console.log(Additionaltimeentry);
                            angular.forEach(Additionaltimeentry, function (addtime) {
                                var hours = addtime.TaskTime;
                                var minutes = hours * 60;
                                totletimeparent += minutes;
                            })
                        }
                    }
                }

            })
            Taskitem.MileageJson = totletimeparent;
            if (Taskitem.MileageJson != 0) {
                Taskitem.Effort = parseInt(Taskitem.MileageJson) / 60;
            } else {
                Taskitem.Effort = 0;
            }
            if (Taskitem.Effort != 0) {
                Taskitem.Effort = Taskitem.Effort.toFixed(2);
                Taskitem.Effort = parseFloat(Taskitem.Effort);
            }
            //   })
        }
        $scope.showmytime = function () {
            if (!$scope.showtime) {
                $scope.showtime = true;
                angular.forEach($scope.GetAllSiteName, function (type, index) {
                    if (type == 'SharewebQA') {
                        $scope.GetAllSiteName.splice(index, 1);
                    }
                })
                //if (OnlyOneTimeList == true) {
                //    $scope.GetAllSiteName.push('OffshoreTasks');
                //    OnlyOneTimeList = false;
                //}
                var SiteCount = 0;
                var filteres = '';
                var expendcolumn = '';
                var Displaycolumn = '';
                if ($scope.GetAllSiteName.length > 0) {
                    angular.forEach($scope.GetAllSiteName, function (site, index) {
                        if (site != undefined && site.toLowerCase() == 'shareweb')
                            site = site.toLowerCase().replace(/\b[a-z]/g, function (letter) { return letter.toUpperCase(); });
                        if ($scope.GetAllSiteName.length == 1 || index == 0) {
                            filteres = "(Task" + site + "/Id gt 0 )";
                            Displaycolumn = ",Task" + site + "/Id,Task" + site + '/Title';
                            expendcolumn = ",Task" + site;
                        } else {
                            filteres += "or (Task" + site + "/Id gt 0 )";
                            Displaycolumn += ",Task" + site + "/Id,Task" + site + '/Title';
                            expendcolumn += ",Task" + site;
                        }

                    })
                    var select = "Id,Title,TaskDate,TaskTime,AdditionalTimeEntry,Description,Author/Id,AuthorId,Author/Title,Category/Id,Category/Title" + Displaycolumn + "&$expand=Author,Category" + expendcolumn + "&$top=4999&$filter=" + filteres + "";
                    SharewebListService.getRequest(GlobalConstants.ADMIN_SITE_URL, "/getbyid('" + GlobalConstants.TASK_TIME_SHEET_LISTID + "')/items?$select=" + select + "")
                        .then(function (data) {
                            SiteCount++;
                            $scope.AllTimeSpentDetails = data.d.results;

                            angular.forEach($scope.AllStructuredData, function (taskItem) {
                                taskItem.selectedSiteType = taskItem.siteType;
                                taskItem.MileageJson = 0;
                                var totletimeparent = 0;
                                angular.forEach($scope.AllTimeSpentDetails, function (detail) {
                                    if (detail['Task' + taskItem.selectedSiteType] != undefined && detail['Task' + taskItem.selectedSiteType].Id != undefined && taskItem.Id != undefined && detail['Task' + taskItem.selectedSiteType].Id == taskItem.Id) {
                                        if (detail.AdditionalTimeEntry != undefined) {
                                            if ($scope.userId == detail.AuthorId) {
                                                var Additionaltimeentry = SharewebCommonFactoryService.parseJSON(detail.AdditionalTimeEntry);
                                                console.log(Additionaltimeentry);
                                                angular.forEach(Additionaltimeentry, function (addtime) {
                                                    var hours = addtime.TaskTime;
                                                    var minutes = hours * 60;
                                                    totletimeparent += minutes;
                                                })
                                            }
                                        }
                                    }

                                })
                                taskItem.MileageJson = totletimeparent;
                                if (taskItem.MileageJson != 0) {
                                    taskItem.Effort = parseInt(taskItem.MileageJson) / 60;
                                } else {
                                    taskItem.Effort = 0;
                                }
                                if (taskItem.Effort != 0) {
                                    taskItem.Effort = taskItem.Effort.toFixed(2);
                                    taskItem.Effort = parseFloat(taskItem.Effort);
                                }
                                if (taskItem.childs != undefined && taskItem.childs.length > 0) {
                                    angular.forEach(taskItem.childs, function (childitem) {
                                        $scope.getTaskTotalTime1(childitem);
                                        if (childitem.childs != undefined && childitem.childs.length > 0) {
                                            angular.forEach(childitem.childs, function (Subchild) {
                                                $scope.getTaskTotalTime1(Subchild);
                                            })
                                        }
                                    })
                                }
                            })
                            angular.forEach($scope.GroupCategories, function (groupItem) {
                                if (groupItem.childs != undefined && groupItem.childs.length > 0) {
                                    angular.forEach(groupItem.childs, function (childitem) {
                                        childitem.selectedSiteType = childitem.siteType;
                                        childitem.MileageJson = 0;
                                        var totletimeparent = 0;
                                        angular.forEach($scope.AllTimeSpentDetails, function (detail) {
                                            if (detail['Task' + childitem.selectedSiteType] != undefined && detail['Task' + childitem.selectedSiteType].Id != undefined && childitem.Id != undefined && detail['Task' + childitem.selectedSiteType].Id == childitem.Id) {
                                                if (detail.AdditionalTimeEntry != undefined) {
                                                    if ($scope.userId == detail.AuthorId) {
                                                        var Additionaltimeentry = SharewebCommonFactoryService.parseJSON(detail.AdditionalTimeEntry);
                                                        console.log(Additionaltimeentry);
                                                        angular.forEach(Additionaltimeentry, function (addtime) {
                                                            var hours = addtime.TaskTime;
                                                            var minutes = hours * 60;
                                                            totletimeparent += minutes;
                                                        })
                                                    }
                                                }
                                            }
                                        })
                                        childitem.MileageJson = totletimeparent;
                                        if (childitem.MileageJson != 0) {
                                            childitem.Effort = parseInt(childitem.MileageJson) / 60;
                                        } else {
                                            childitem.Effort = 0;
                                        }
                                        if (childitem.Effort != 0) {
                                            childitem.Effort = childitem.Effort.toFixed(2);
                                            childitem.Effort = parseFloat(childitem.Effort);
                                        }
                                    })
                                }
                            })
                            $scope.copyGroupCategories = angular.copy($scope.GroupCategories);
                            $scope.copyforAllStructuredData = angular.copy($scope.AllStructuredData);
                        },
                            function (error) {
                                console.log(error);
                            });
                }
            } else {
                $scope.showtime = false;
                $scope.GroupCategories = angular.copy($scope.copyGroupCategories1);
                $scope.AllStructuredData = angular.copy($scope.copyforAllStructuredData2);
            }
        };
        $scope.ApprovalRejectTask = function (type) {
            SharewebCommonFactoryService.showProgressBar();
            var Portfolio_x0020_Type = undefined;
            if ($scope.Task.Component != undefined && $scope.Task.Component.results != undefined && $scope.Task.Component.results.length > 0) {
                Portfolio_x0020_Type = 'Component';
            }
            else if ($scope.Task.Services != undefined && $scope.Task.Services.results != undefined && $scope.Task.Services.results.length > 0) {
                Portfolio_x0020_Type = 'Service';
            }
            else if ($scope.Task.Events != undefined && $scope.Task.Events.results != undefined && $scope.Task.Events.results.length > 0) {
                Portfolio_x0020_Type = 'Events';
            }
            else {
                Portfolio_x0020_Type = 'Component';
            }
            setTimeout(function () {
                $rootScope.modalInstanceApprovalRejection = $uibModal.open({
                    templateUrl: _spPageContextInfo.siteAbsoluteUrl + '/Style%20Library/js/angular/Templates/ApprovalRejection.html',
                    controller: 'ApprovalRejectionController',
                    backdrop: "static",
                    size: 'lg'
                });
                $rootScope.modalInstanceApprovalRejection.Item = $scope.Task;
                $rootScope.modalInstanceApprovalRejection.Type = type;
                $rootScope.modalInstanceApprovalRejection.ListName = $scope.ListNameQuery;
                $rootScope.modalInstanceApprovalRejection.Portfolio_x0020_Type = Portfolio_x0020_Type;
                $rootScope.modalInstanceApprovalRejection.EditItemCallBack = function (Item) {
                    $scope.EditItemCallBack($scope.Task);
                    $scope.isShowApprovalButtons = false;
                    SharewebCommonFactoryService.hideProgressBar();
                };
            }, 10);
        }
        $scope.isItemExistsTestacseID = function (arr, Id) {
            var isExists = false;
            angular.forEach(arr, function (item) {
                if (item.TestacseID == Id) {
                    isExists = true;
                    return false;
                }
            });
            return isExists;
        }
        var count = 0;
        const LoadSmartMetaDataItems = function () {
            SharewebCommonFactoryService.LoadAllMetaData().then(function (AllMetaData) {
                siteConfig = SharewebCommonFactoryService.getSmartMetadataItemsByTaxType(AllMetaData, 'Sites');
                $scope.SitesConfig = SharewebCommonFactoryService.getSmartMetadataItemsByTaxType(AllMetaData, 'Sites');
            }, function (error) {
                console.log(error);
            })
        }
        ////test cases
        $scope.loadSPComponentsListData = function () {
            $scope.smartFeaturesAvailable = [];
            var Component = '';

            var type = '';
            var query = '';
            if ($scope.Task.Component.results != undefined && $scope.Task.Component.results.length > 0) {
                type = 'Component';
                Component = $scope.Task.Component.results;
                query = "Component_x003a_ID eq " + Component[0].Id;
                $scope.smartFeaturesAvailable.push(Component[0])
            }
            else if ($scope.Task.Services.results != undefined && $scope.Task.Services.results.length > 0) {
                type = 'Service';
                Component = $scope.Task.Services.results;
                query = "Service_x003a_ID eq " + Component[0].Id;
                $scope.smartFeaturesAvailable.push(Component[0])

            }




            SharewebListService.getRequest(_spPageContextInfo.webAbsoluteUrl, "/getbyid('" + GlobalConstants.SPCOMPONENTS_LISTID + "')/items?$select=Id,Title,PageUrl,BasicImageInfo,Item_x0020_Type,Body,PageName,WebpartType,WebpartId,Status,PercentComplete,DataSources,Attachments,Dependencies/Id,Dependencies/Title,BaseTemplate/Id,BaseTemplate/Title,PortfolioItems/Id,PortfolioItems/Title,AttachmentFiles/FileName,Component/Id,Component/Title,Service/Id,Service/Title&$expand=Component,Service,AttachmentFiles,PortfolioItems,Dependencies,BaseTemplate&$filter=" + query + "&$top=4999")
                .then(function (success) {
                    $scope.AllWebpartData = [];
                    angular.forEach(success.d.results, function (item) {

                        $scope.AllWebpartData.push(item);
                    })

                    angular.forEach($scope.AllWebpartData, function (item) {

                        if (item.PortfolioItems.results != undefined && item.PortfolioItems.results.length > 0) {
                            //$scope.smartFeaturesAvailable = angular.copy(item.PortfolioItems.results);
                            angular.forEach(item.PortfolioItems.results, function (data) {
                                $scope.smartFeaturesAvailable.push(data);

                            })

                        }
                    })
                    var array = $scope.smartFeaturesAvailable.sort(function (a, b) {
                        var nA = a.Title.toLowerCase();
                        var nB = b.Title.toLowerCase();

                        if (nA < nB)
                            return -1;
                        else if (nA > nB)
                            return 1;
                        return 0;
                    });
                    $scope.smartFeaturesAvailable = array;
                    $scope.smartFeaturesAvailable1 = angular.copy($scope.smartFeaturesAvailable);
                    // $scope.loadTestCases($scope.smartFeaturesAvailable);
                    SharewebCommonFactoryService.hideProgressBar();
                },
                    function (error) {
                        console.log(error);
                    })
        }
        $scope.toggleSmartTestCase = function (group) {
            group.expanded = !group.expanded;
        };
        $scope.loadTestCases = function () {
            $scope.smartFeaturesAvailable = angular.copy($scope.smartFeaturesAvailable1);
            $scope.AllTestCase = [];
            var counts = 0;
            var Component = '';
            var type = '';
            if ($scope.Task.Component.results != undefined && $scope.Task.Component.results.length > 0) {
                type = 'Component';
                Component = $scope.Task.Component.results[0];

            }
            else if ($scope.Task.Services.results != undefined && $scope.Task.Services.results.length > 0) {
                type = 'Service';
                Component = $scope.Task.Services.results[0];


            }


            angular.forEach($scope.smartFeaturesAvailable, function (item) {


                var filter = '';
                if (type == 'Service' && $scope.Task.Services.results != undefined && $scope.Task.Services.results.length > 0) {
                    filter = "Services/Id eq " + item.Id;
                }
                else if (type == 'Component' && $scope.Task.Component.results != undefined && $scope.Task.Component.results.length > 0) {
                    filter = "Components/Id eq " + item.Id;
                }
                if (filter != '' && filter != undefined) {
                    SharewebListService.getRequest(GlobalConstants.ADMIN_SITE_URL, "/getbyid('" + GlobalConstants.LIST_TEST_CASE + "')/items?$select=Id,Title,Order0,AssignedTo/Id,AssignedTo/Title,Body,Components/Id,Components/Title,Components/ItemType&$expand=AssignedTo,Components&$orderby=Order0 asc&$filter=(" + filter + ")")
                        .then(function (data) {
                            counts++
                            SharewebCommonFactoryService.hideProgressBar();
                            if (data.d.results != undefined && data.d.results.length > 0) {
                                angular.forEach(data.d.results, function (data) {
                                    if (!$scope.isItemExists($scope.AllTestCase, data.Id)) {
                                        if (data.Components.results != undefined && data.Components.results.length > 0) {
                                            data.parentId = data.Components.results[0].Id;

                                        }
                                        else if (data.Services.results != undefined && data.Services.results.length > 0) {
                                            data.parentId = data.Services.results[0].Id;

                                        }
                                        if (Component.Id == data.parentId) {
                                            $scope.componentsitem15 = true;
                                        }
                                        $scope.AllTestCase.push(data);
                                    }
                                })


                            }
                            if (counts == $scope.smartFeaturesAvailable.length) {
                                angular.forEach($scope.Testcasejson, function (data) {
                                    angular.forEach($scope.AllTestCase, function (item) {
                                        if (item.Id == data.Id) {
                                            item.Ischecked = true;
                                        }
                                    })
                                })

                                angular.forEach($scope.smartFeaturesAvailable, function (items) {
                                    items.expanded = false;
                                    items.flag = false;
                                    items.childs = [];

                                    angular.forEach($scope.AllTestCase, function (data) {
                                        if (items.Id == data.parentId) {

                                            items.expanded = true;
                                            data.expanded = true;
                                            items.flag = true
                                            data.flag = true;

                                            if (data.Order0 == 0) {
                                                data.Order0 = '';
                                                items.childs.push(data);
                                            }
                                            else {
                                                items.childs.unshift(data);
                                            }


                                        }

                                    })
                                })
                                angular.forEach($scope.smartFeaturesAvailable, function (items, index) {
                                    if (items.childs == undefined || items.childs.length == 0) {
                                        items.childs = undefined;
                                    }
                                    if (Component.Id == items.Id && $scope.componentsitem15 == true) {
                                        $scope.smartFeaturesAvailable.splice(index, 1);
                                        angular.forEach(items.childs, function (test) {
                                            items.expanded = true;
                                            test.flag = true;
                                            $scope.smartFeaturesAvailable.unshift(test);

                                        })
                                    }

                                })

                                angular.forEach($scope.Testcasejson, function (data) {
                                    //countnew1++;
                                    data.Order0 = 0;

                                    if (data.TaskTestCase == true) {

                                        data.flag = true;
                                        if (data.TestacseID != undefined) {
                                            $scope.TestacseID = data.TestacseID;
                                            data.expanded = true;
                                            data.flag = true;

                                        }
                                        if (!$scope.isItemExistsTestacseID($scope.smartFeaturesAvailable, data.TestacseID)) {
                                            $scope.smartFeaturesAvailable.unshift(data);
                                        }

                                    }


                                })

                            }


                        },
                            function (error) {

                                counts++;
                            });


                }
            })

        }
        $scope.savetestcase = false;
        $scope.selectTestcase = function (item, select) {
            SharewebCommonFactoryService.showProgressBar();
            // var TestCase={};
            // $scope.savetestcase=true;
            // if(select==true && !$scope.isItemExists($scope.Testcasejson,item.Id))
            // { TestCase.Id=item.Id;
            //     TestCase.Title=item.Title;

            //     $scope.Testcasejson.push(TestCase);
            // }
            // else if(select==false||select==undefined){
            //     angular.forEach($scope.Testcasejson,function(data,index){
            // if(data.Id==item.Id){

            //     $scope.Testcasejson.splice(index,1);

            // }

            //     })

            // }
            var TestCase = {};

            if (select == true && !$scope.isItemExists($scope.Testcasejson, item.Id)) {
                TestCase.Id = item.Id;
                TestCase.Title = item.Title;
                $scope.Testcasejson.push(TestCase);
            }
            else if (select == false || select == undefined) {
                angular.forEach($scope.Testcasejson, function (data, index) {
                    if (data.Id == item.Id && data.TaskTestCase == undefined) {

                        $scope.Testcasejson.splice(index, 1);

                    }
                    else if (data.TestacseID == item.TestacseID && data.TaskTestCase == true) {

                        data.Ischecked = false;

                    }

                })

            }
            angular.forEach($scope.Testcasejson, function (data) {
                if (select == true && data.TestacseID == item.TestacseID && data.TaskTestCase == true) {

                    data.Ischecked = true;
                }


            })

            var postData = {
                __metadata: { "type": $scope.Task.__metadata.type },
                Id: $scope.Task.Id,
                TestCaseJson: angular.toJson($scope.Testcasejson)
            }
            SharewebListService.UpdateListItemByListId($scope.CurrentSiteUrl, $scope.TaskListID, postData, $scope.Task.Id)
                .then(function (response) {
                    SharewebCommonFactoryService.hideProgressBar();
                    alert('Changes have been Saved Successfully  ')
                }, function (error) {
                    console.log(error);
                });

        }
        //Code for post comment functionality............
        $scope.updateTaskRecords = function () {
            $scope.IsSavePopup = true;
            $scope.FeedBackDetails = [];

            var FeedBackItem = {};
            FeedBackItem['Title'] = "FeedBackPicture" + $scope.param;
            FeedBackItem['FeedBackDescriptions'] = $scope.DescriptionFields;
            FeedBackItem['ImageDate'] = $scope.param;
            FeedBackItem['Completed'] = $scope.isCompleted;
            angular.forEach($scope.TaskUsers, function (taskUser) {
                if (taskUser.AssingedToUserId == _spPageContextInfo.userId) {
                    FeedBackItem['AuthorName'] = taskUser.Title;
                    FeedBackItem['AuthorImage'] = taskUser.Item_x0020_Cover != undefined ? taskUser.Item_x0020_Cover.Url : '';
                }
            });
            $scope.FeedBackDetails.push(FeedBackItem);
            var Description = [];
            var add = '';
            angular.forEach($scope.FeedBackDetails[0].FeedBackDescriptions, function (item, index) {
                if (item.Title != '') {
                    Description.push(item);
                }
            });

            var postData = {
                __metadata: { "type": $scope.listMetaData },
                Id: $scope.Task.Id,
                FeedBack: angular.toJson($scope.FeedBackDetails)
            }
            SharewebListService.UpdateListItemByListId($scope.CurrentSiteUrl, $scope.TaskListID, postData, $scope.Task.Id)
                .then(function (response) {
                    console.log(response);

                }, function (error) {
                    alert('Error: ' + error);
                });

        };
        //End Code for post comment functionality..........


        ////End Test cases
        LoadSmartMetaDataItems();
        //*********************End Here******************
        //*********************Version History******************
        $scope.GetitemsVersionhistory = function (itemSite, ItemId) {
            SharewebCommonFactoryService.showProgressBar();
            var itemlistId = itemSite.__metadata.uri.split("(guid'")[1].split("')/Items")[0];
            var url = _spPageContextInfo.webAbsoluteUrl + "/_layouts/15/Versions.aspx?list=" + itemlistId + "&ID=" + ItemId;
            $.ajax({
                url: url,
                method: "GET",
                headers: { "Accept": "application/json; odata=verbose" },
                success: function (data) {
                    var tableHtml = $(data).find("table.ms-settingsframe")[0].outerHTML;
                    // let strippedString = tableHtml.replace(/(<([^>]+)>)/gi, "");
                    $("#versionhistory").html(tableHtml);

                    $('#Versionhistorypopup').show();
                    SharewebCommonFactoryService.hideProgressBar();
                },
                error: function (error) {
                    console.log(JSON.stringify(error));
                }
            });
        }
        $scope.cancelversionpopup = function () {
            $('#Versionhistorypopup').hide();

        }
    }
]);