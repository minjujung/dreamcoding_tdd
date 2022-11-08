## 좋은 테스트의 원칙

1. 한번 작성된 코드는 영원히 **유지보수** 되어야 한다!

2. 내부 구현사항을 테스트하면 안된다!

3. 재사용성 높이기(ex: 테스트를 위한 클래스 만들기)

4. 배포용 코드와 철저히 분리!

5. 테스트 코드를 통한 문서화!

<br>

### 테스트 코드의 구조

- beforeEach(테스트 전 실행)

- arrange(준비) or given => 준비과정 재사용

- act(실행) or when => 의도적으로 실패하기(버그 검증)

- assertion(검증) or then => 가장 마지막에

- afterEach(테스트 후 실행)

<br>

### FIRST 원칙

- Fast: 느린것에 대한 의존성 낮추기(ex: 파일, 데이터베이스 -> mock, stub 대신 사용하기)

- Isolated: 최소한의 유닛으로 검증 -> 독립적, 집중적

- Repeatable: 실행할 떄 마다 동일한 결과 유지 -> 환경에 영향을 받지 않도록!

- Self-Validating: 스스로 결과를 검증하기 -> **자동화를 통한 검증단계(CI/CD)**

- Timely: 시기적절하게 테스트 코드 작성 -> 사용자에게 배포하기 이전!

<br>

### 테스트 범위 원칙

**Right-BICEP**

- 모든 요구 사항이 정상 동작 하는지 확인

- Boundary conditions: 모든 코너 케이스에 대해 테스트 하기(ex: null, input 값 체크)

- Inverse relationship: 역관계를 적용해서 결과값 확인

- Cross check: 다른 수단을 이용해서 결과값이 맞는지 확인

- Error conditions: 불행한 경로에 대해 우아하게 처라하는가?

- Performance characteristics: 성능 확인은 테스트를 통해 정확한 수치로 확인

<br>

### 테스트의 조건

**CORRECT**

- Conformance: 특정 포맷을 준수

- Ordering: 순서 조건 확인하기

- Range: 숫자의 범위

- Reference: 외부 의존성 유무, 특정한 조건의 유무(ex: 어떤 특정한 상황 일떄 ~하게 동작 해야되)

- Existence: 값이 존재하지 않을 떄 어떻게 동작?

- Cardinality: 0-1-N (하나도 없을 떄, 하나만 있을 떄, 엄청 많을 때) 법칙에 따라 검증

- Time: 상대, 절대, 동시의 일들
