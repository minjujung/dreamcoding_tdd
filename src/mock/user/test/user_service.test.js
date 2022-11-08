const UserService = require("../user_service");
const UserClient = require("../user_client");

/**
 * login을 했냐 안했냐 같은 특정 행동에 대한 검사는
 * mock 을 사용하는 게 더 좋음
 */

jest.mock("../user_client");

describe("UserService", () => {
  // 나의 시도
  // const login = jest.fn(async (id, pw) => {
  //   if (id === "minju" && pw === "1234") {
  //     return { id, pw };
  //   }

  //   throw "Parameter is not a number!";
  // });

  //mock은 간단하게 해도 됨!
  const login = jest.fn(async () => "success");
  UserClient.mockImplementation(() => {
    return {
      login,
    };
  });

  let userService;

  beforeEach(() => {
    userService = new UserService(new UserClient());
  });

  // 나의 시도
  // it("login if ID and PASSWORD correct", () => {});
  // it("error if ID and PASSWORD not correct", () => {});
  // it("already login", () => {});

  /**
   * 테스트의 목적에 맞게 테스트 작성하기!!
   * 이번 테스트의 목적은 로그인이 되었으면 이후 로그인 함수 실행안하는 지 테스트
   */
  it("calls login() on UserClient when tries to login", async () => {
    await userService.login("abc", "123");
    expect(login).toBeCalledTimes(1);
  });

  it("should not call login() on UserClient again if already logged in", async () => {
    await userService.login("abc", "123");
    await userService.login("abcd", "1234");

    expect(login).toBeCalledTimes(1);
  });
});
