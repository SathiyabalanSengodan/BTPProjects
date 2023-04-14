















service CatalogService @(path : '/catalog')
@(requires: 'authenticated-user')
{
















    type userScopes { identified: Boolean; authenticated: Boolean; };
    type userType { user: String; locale: String; scopes: userScopes; };
    function userInfo() returns userType;


};