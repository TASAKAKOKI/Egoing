// 중복을 제거하면, 자연스럽게 좋은 프로그래밍이 된다.
console.log('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
//이렇게 할시, 이 문장을 자주 이용해야 할 때마다 애를 먹게 된다..

var lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
console.log(lorem);

var letter1 = 'Dear egoing Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim egoing veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit egoing esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecate egoing cupidatat non proident, sunt in culpa egoing qui officia deserunt mollit anim id est laborum.'

var name = '-ChangedEgoing-';
var letter2 = 'Dear '+name+' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim '+name+' veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit '+name+' esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecate '+name+' cupidatat non proident, sunt in culpa name qui officia deserunt mollit anim id est laborum.'
console.log(letter1);
console.log(letter2);