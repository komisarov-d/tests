// import {
//     startAndLogIn,
//     createRoom,
//     checkIsInRoom,
//     joinRoom,
//     quitRoom,
//     pressReadyButton,
//     checkIsInRoomSelector,
//     createTwoUsersInSameRoom,
//     checkTimerAppeared,
//     checkTextToAppear,
//     checkReadyButtonDoesNotExists,
//     checkTimerDoesNotExists,
//     checkTextDoesNotExists,
//     getTextToEnter,
//     checkProgress,
//     checkFinished,
//     checkNoRoomShown,
//     enterText,
//     sleep,
//     checkUserPlace,
//     closeResultsModal,
//     checkReadyButtonToAppear,
//     checkQuitRoomToAppear,
//     checkNoReadyUser,
//     getAppAndServer,
//     checkQuitRoomDoesNotExists,
// } from './utils';

// const puppeteer = require('puppeteer');
// const assert = require('assert');

// describe('Test UI', () => {
//     console.log = () => {};
//     let browsers = [];
//     let app = null;
//     let server = null;

//     const initBrowsers = async numberOfBrowsers => {
//         browsers = await Promise.all(
//             Array(numberOfBrowsers)
//                 .fill(null)
//                 .map(() =>
//                     puppeteer.launch({
//                         headless: true,
//                         args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
//                     })
//                 )
//         );
//     };

//     beforeEach(async () => {
//         const { app: serverApp, httpServer } = getAppAndServer();
//         app = serverApp;
//         server = httpServer;
//     });

//     afterEach(async () => {
//         await Promise.all(browsers.map(browser => browser?.close()));

//         browsers = [];
//         server?.close();
//         await sleep(200);
//     });

//     it('CHECK_SAVE_USERNAME_IN_SESSION_STORAGE_AND_REDIRECT_TO_GAME', async function () {
//         this.timeout(7000);
//         await initBrowsers(1);

//         const username = 'username-test';

//         const page = await startAndLogIn(browsers[0], username);
//         const usernameFromSessionStorage = await page.evaluate(() => window.sessionStorage.username);

//         assert(page.url() === 'http://localhost:3002/game', 'Should redirect to /game');
//         assert(usernameFromSessionStorage, 'Username is not saved in sessionStorage');
//         assert(username === usernameFromSessionStorage, 'Username saved incorrectly in sessionStorage');

//         await page.goto('http://localhost:3002/login');

//         assert(
//             page.url() === 'http://localhost:3002/game',
//             'Should redirect to /game when there is username in sessionStorage'
//         );
//     });

//     it('SHOULD_ALERT_AND_NOT_SAVE_USERNAME_WHEN_IT_IS_EXISTS', function (done) {
//         this.timeout(10000);
//         initBrowsers(2).then(() => {
//             const username = 'username-test';

//             startAndLogIn(browsers[0], username).then(async page1 => {
//                 startAndLogIn(browsers[1], username, page2 => {
//                     page2.on('dialog', async dialog => {
//                         await dialog.accept();
//                         await sleep(300);

//                         const usernameFromSessionStorage = await page1.evaluate(() => window.sessionStorage.username);
//                         const usernameFromSessionStorage1 = await page2.evaluate(() => window.sessionStorage.username);

//                         assert(
//                             usernameFromSessionStorage !== usernameFromSessionStorage1,
//                             'Should not save in sessionStorage when user with same username already exists'
//                         );

//                         done();
//                     });
//                 });
//             });
//         });
//     });

//     it('SHOULD_CREATE_ROOM_AND_BE_REDIRECTED_TO_IT', async function () {
//         this.timeout(12000);
//         const username = 'username-test';
//         await initBrowsers(1);

//         const page = await startAndLogIn(browsers[0], username);

//         await createRoom(page, 'room1');
//         await checkIsInRoom(page);
//     });

//     it('SHOULD_SHOW_CREATED_ROOMS', async function () {
//         this.timeout(12000);
//         await initBrowsers(2);

//         const username1 = 'user1';
//         const username2 = 'user2';
//         const roomName = 'room-1';

//         const page1 = await startAndLogIn(browsers[0], username1);
//         await createRoom(page1, roomName);

//         const page2 = await startAndLogIn(browsers[1], username2);
//         await joinRoom(page2);
//     });

//     it('SHOULD_NOT_SHOW_ROOMS_WITH_MAXIMUM_NUMBER_OF_USERS', async function () {
//         this.timeout(15000);
//         await initBrowsers(4);

//         const username1 = 'user1';
//         const username2 = 'user2';
//         const username3 = 'user3';
//         const username4 = 'user4';
//         const roomName = 'room-1';

//         const page1 = await startAndLogIn(browsers[0], username1);
//         await createRoom(page1, roomName);
//         await checkIsInRoom(page1);

//         const [page2, page3, page4] = await Promise.all([
//             startAndLogIn(browsers[1], username2),
//             startAndLogIn(browsers[2], username3),
//             startAndLogIn(browsers[3], username4),
//         ]);

//         await Promise.all([joinRoom(page2), joinRoom(page3)]);
//         await Promise.all([checkIsInRoom(page2), checkIsInRoom(page3)]);

//         await checkNoRoomShown(page4);
//     });

//     it('SHOULD_SHOW_OTHER_USERS_IN_ROOM', async function () {
//         this.timeout(12000);
//         await initBrowsers(2);

//         const { page1, page2 } = await createTwoUsersInSameRoom({ browser1: browsers[0], browser2: browsers[1] });

//         //TODO: write in task about it
//         // const page1User = await page1.$$eval('.room-user-name', nodes =>
//         //     nodes.map(node => node.innerHTML).filter(username => !/(you)/.test(username))
//         // );
//         // const page2User = await page2.$$eval('.room-user-name', nodes =>
//         //     nodes.map(node => node.innerHTML).filter(username => !/(you)/.test(username))
//         // );
//         // assert(page1User[0] === 'user2', 'Should show username of another user in the room');
//         // assert(page2User[0] === 'user1', 'Should show username of another user in the room');

//         //* simple solution
//         const usersExistsOnPage1 = await page1.evaluate(
//             () => /user1/.test(document.body.innerText) && /user2/.test(document.body.innerText)
//         );
//         const usersExistsOnPage2 = await page2.evaluate(
//             () => /user1/.test(document.body.innerText) && /user2/.test(document.body.innerText)
//         );

//         assert(usersExistsOnPage1, 'Should usernames of all users in room');
//         assert(usersExistsOnPage2, 'Should usernames of all users in room');
//     });

//     it('SHOULD_SHOW_READY_STATUS_OF_USERS_IN_ROOM', async function () {
//         this.timeout(12000);
//         await initBrowsers(2);

//         const { page1, page2 } = await createTwoUsersInSameRoom({ browser1: browsers[0], browser2: browsers[1] });

//         await pressReadyButton(page1);

//         const notReadyUsersOnPage1 = (await page1.$$eval('.ready-status-red', nodes => nodes)).length;
//         const readyUsersOnPage1 = (await page1.$$eval('.ready-status-green', nodes => nodes)).length;
//         const notReadyUsersOnPage2 = (await page2.$$eval('.ready-status-red', nodes => nodes)).length;
//         const readyUsersOnPage2 = (await page2.$$eval('.ready-status-green', nodes => nodes)).length;

//         assert(notReadyUsersOnPage1 === 1, 'Should show not ready users red status');
//         assert(notReadyUsersOnPage2 === 1, 'Should show not ready users red status');
//         assert(readyUsersOnPage1 === 1, 'Should show ready users green status');
//         assert(readyUsersOnPage2 === 1, 'Should show ready users green status');
//     });

//     it('SHOULD_WORK_BACK_TO_ROOMS_BUTTON', async function () {
//         this.timeout(12000);
//         await initBrowsers(1);

//         const username = 'username-test';

//         const page = await startAndLogIn(browsers[0], username);

//         await createRoom(page, 'test-room');
//         await checkIsInRoom(page);
//         await quitRoom(page);
//         await checkIsInRoomSelector(page);
//     });

//     it('ROOM_SHOULD_BE_DELETED_WHEN_THERE_IS_NO_USER', async function () {
//         this.timeout(12000);
//         await initBrowsers(1);

//         const username = 'username-test';

//         const page = await startAndLogIn(browsers[0], username);

//         await createRoom(page, 'test-room');
//         await checkIsInRoom(page);
//         await quitRoom(page);
//         await checkIsInRoomSelector(page);

//         const numberOfRooms = (await page.$$eval('.room .join-btn', nodes => nodes)).length;

//         assert(numberOfRooms === 0, 'room should be deleted when user quit it');
//     });

//     it('ROOM_SHOULD_BE_DELETED_WHEN_SINGLE_USERS_DISCONNECTS', async function () {
//         this.timeout(12000);
//         await initBrowsers(2);

//         const username1 = 'username-test';
//         const username2 = 'username-test-1';

//         const page1 = await startAndLogIn(browsers[0], username1);

//         await createRoom(page1, 'test-room');
//         await checkIsInRoom(page1);
//         page1.close();

//         const page2 = await startAndLogIn(browsers[1], username2);
//         await checkIsInRoomSelector(page2);
//         const numberOfRooms = (await page2.$$eval('.room .join-btn', nodes => nodes)).length;

//         assert(numberOfRooms === 0, 'room should be deleted when user disconnects it');
//     });

//     it('SHOULD_START_GAME_WHEN_ALL_USERS_READY', async function () {
//         this.timeout(30000);
//         await initBrowsers(2);

//         const { page1, page2 } = await createTwoUsersInSameRoom({ browser1: browsers[0], browser2: browsers[1] });

//         await pressReadyButton(page1);
//         await pressReadyButton(page2);

//         await Promise.all([checkTimerAppeared(page1), checkTimerAppeared(page2)]);
//         await Promise.all([checkTextDoesNotExists(page1), checkTextDoesNotExists(page2)]);
//         await Promise.all([checkReadyButtonDoesNotExists(page1), checkReadyButtonDoesNotExists(page2)]);
//         await Promise.all([checkTextToAppear(page1), checkTextToAppear(page2)]);
//         await Promise.all([checkTimerDoesNotExists(page1), checkTimerDoesNotExists(page2)]);
//         await Promise.all([checkQuitRoomDoesNotExists(page1), checkQuitRoomDoesNotExists(page2)]);
//     });

//     it('SHOULD_START_GAME_WHEN_ALL_USERS_READY_AND_ONE_LEFT_GAME', async function () {
//         this.timeout(26000);
//         await initBrowsers(3);

//         const [page1, page2, page3] = await Promise.all([
//             startAndLogIn(browsers[0], 'user1'),
//             startAndLogIn(browsers[1], 'user2'),
//             startAndLogIn(browsers[2], 'user3'),
//         ]);

//         await createRoom(page1, 'room1');
//         await Promise.all([joinRoom(page2), joinRoom(page3)]);

//         await pressReadyButton(page1);
//         await pressReadyButton(page2);

//         await quitRoom(page3);

//         await Promise.all([checkTimerAppeared(page1), checkTimerAppeared(page2)]);
//         await Promise.all([checkTextDoesNotExists(page1), checkTextDoesNotExists(page2)]);
//         await Promise.all([checkReadyButtonDoesNotExists(page1), checkReadyButtonDoesNotExists(page2)]);
//         await Promise.all([checkTextToAppear(page1), checkTextToAppear(page2)]);
//         await Promise.all([checkTimerDoesNotExists(page1), checkTimerDoesNotExists(page2)]);
//         await Promise.all([checkQuitRoomDoesNotExists(page1), checkQuitRoomDoesNotExists(page2)]);
//     });

//     it('SHOULD_SHOW_PROGRESS', async function () {
//         this.timeout(20000);
//         await initBrowsers(2);

//         const { page1, page2 } = await createTwoUsersInSameRoom({ browser1: browsers[0], browser2: browsers[1] });

//         await pressReadyButton(page1);
//         await pressReadyButton(page2);

//         await Promise.all([checkTextToAppear(page1), checkTextToAppear(page2)]);

//         const page1Text = await getTextToEnter(page1);

//         await page1.keyboard.down('Shift');
//         await page1.keyboard.press(`KeyT`);
//         await page1.keyboard.up('Shift');
//         await page1.keyboard.press(`KeyE`);
//         await page1.keyboard.press(`KeyX`);
//         await page1.keyboard.press(`KeyT`);
//         await page1.keyboard.press(`-`);
//         await page1.keyboard.press(`#`);
//         await checkProgress(page1, 'user1', 50);
//         await checkProgress(page2, 'user1', 50);
//     });

//     it('SHOULD_DELETE_ROOM_FROM_LIST_WHEN_TIMER_STARTED_OR_GAME_IN_PROGRESS', async function () {
//         this.timeout(12000);
//         await initBrowsers(3);

//         const { page1, page2 } = await createTwoUsersInSameRoom({ browser1: browsers[0], browser2: browsers[1] });
//         const page3 = await startAndLogIn(browsers[2], 'user3');

//         await pressReadyButton(page1);
//         await pressReadyButton(page2);

//         await checkNoRoomShown(page3);
//         await page3.waitForTimeout(500);
//         await page3.reload();
//         await checkNoRoomShown(page3);
//     });

//     it('SHOULD_HIGHLIGHT_USER_THAT_ENDED_RACE', async function () {
//         this.timeout(12000);
//         await initBrowsers(2);

//         const { page1, page2 } = await createTwoUsersInSameRoom({ browser1: browsers[0], browser2: browsers[1] });

//         await Promise.all([pressReadyButton(page1), pressReadyButton(page2)]);
//         await Promise.all([checkTextToAppear(page1), checkTextToAppear(page2)]);

//         const page1Text = await getTextToEnter(page1);
//         const page2Text = await getTextToEnter(page2);

//         assert.strictEqual(page1Text, page2Text, 'Text should be the same on both pages');

//         await enterText(page1, page1Text[page1Text.length - 1]);
//         await sleep(200);
//         await checkFinished(page1, 'user1');
//         await checkFinished(page2, 'user1');
//     });

//     it('SHOULD_SHOW_RESULTS_AFTER_ALL_USERS_ENTERED_TEXT', async function () {
//         this.timeout(14000);
//         await initBrowsers(2);

//         const { page1, page2 } = await createTwoUsersInSameRoom({ browser1: browsers[0], browser2: browsers[1] });

//         await Promise.all([pressReadyButton(page1), pressReadyButton(page2)]);
//         await Promise.all([checkTextToAppear(page1), checkTextToAppear(page2)]);

//         const text = await getTextToEnter(page1);
//         await enterText(page1, text[text.length - 1]);
//         await sleep(200);
//         await enterText(page2, text[text.length - 1]);

//         await sleep(200);
//         await Promise.all([checkTextDoesNotExists(page1), checkTextDoesNotExists(page2)]);
//         await Promise.all([
//             checkUserPlace(page1, 'user1', 1),
//             checkUserPlace(page1, 'user2', 2),
//             checkUserPlace(page2, 'user1', 1),
//             checkUserPlace(page2, 'user2', 2),
//         ]);
//     });

//     it('SHOULD_END_GAME_WHEN_ONE_USER_DISCONNECTS_AND_OTHER_ENTERED_TEXT', async function () {
//         this.timeout(16000);
//         await initBrowsers(3);

//         const { page1, page2 } = await createTwoUsersInSameRoom({ browser1: browsers[0], browser2: browsers[1] });
//         const page3 = await startAndLogIn(browsers[2], 'user3');
//         await joinRoom(page3);
//         await sleep(300);

//         await Promise.all([pressReadyButton(page1), pressReadyButton(page2), pressReadyButton(page3)]);
//         await Promise.all([checkTextToAppear(page1), checkTextToAppear(page2), checkTextToAppear(page3)]);

//         const text = await getTextToEnter(page1);
//         await enterText(page1, text[text.length - 1]);
//         await sleep(200);
//         await enterText(page2, text[text.length - 1]);

//         await page3.close();

//         await sleep(200);
//         await Promise.all([
//             checkUserPlace(page1, 'user1', 1),
//             checkUserPlace(page1, 'user2', 2),
//             checkUserPlace(page2, 'user1', 1),
//             checkUserPlace(page2, 'user2', 2),
//         ]);
//         await Promise.all([checkTextDoesNotExists(page1), checkTextDoesNotExists(page2)]);
//     });

//     it('SHOULD_CLEAR_AFTER_END_GAME', async function () {
//         this.timeout(12000);
//         await initBrowsers(2);

//         const { page1, page2 } = await createTwoUsersInSameRoom({ browser1: browsers[0], browser2: browsers[1] });

//         await Promise.all([pressReadyButton(page1), pressReadyButton(page2)]);
//         await Promise.all([checkTextToAppear(page1), checkTextToAppear(page2)]);

//         const text = await getTextToEnter(page1);
//         await enterText(page1, text[text.length - 1]);
//         await sleep(200);
//         await enterText(page2, text[text.length - 1]);

//         await closeResultsModal(page1);
//         await closeResultsModal(page2);

//         await sleep(200);
//         await Promise.all([checkReadyButtonToAppear(page1), checkReadyButtonToAppear(page2)]);
//         await Promise.all([checkQuitRoomToAppear(page1), checkQuitRoomToAppear(page2)]);
//         await Promise.all([checkNoReadyUser(page1), checkNoReadyUser(page2)]);
//     });
// });
