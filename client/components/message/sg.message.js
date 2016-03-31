angular.module('sg.message').run(['gettextCatalog', function (gettextCatalog) {
/* jshint -W100 */
    gettextCatalog.setStrings('ko_KR', {"Login Failed":"로그인 실패.","Login Required. Or Your login info is expired.":"필수 로그인합니다. 또는 당신의 로그인 정보는 만료됩니다.","Login Success":"로그인 성공","Not found the Content.":"콘텐츠를 찾을 수 없습니다.","Signup Failed":"가입 실패","Signup Success":"가입 성공","User Email Duplicated":"사용자 이메일 중복","You send a Bad Request. send the right thing.":"잘못된 페이지를 요청하였습니다.","Your Authorized is forbidden. Request the authorization to administratrator.":"권한이 금지되었습니다. "});
/* jshint +W100 */
}]);