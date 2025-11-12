# TODO: 전역 Store 및 Config 저장 기능

## 목표

전역 store에서 유저가 설정한 config을 저장하고, save button 클릭 시 이를 반영

## Config 파일 정보

- **저장 위치**: `~/.config/sketchybar/user.sketchybarrc`
- **파일 형식**: Bash script (환경 변수 export)
- **환경 변수 기본값 위치**: `~/.config/sketchybar/core/env.sh`

### 환경 변수 전체 목록

#### 1. 테마 설정

- `SBAR_THEME` - 테마 선택 (기본값: "onedark")

#### 2. 바(Bar) 스타일 설정

- `SBAR_BAR_STYLE` - 바 스타일 (기본값: "block", 옵션: "compact")
- `SBAR_BAR_BACKGROUND` - 바 배경 (기본값: "transparent")
- `SBAR_BAR_HEIGHT` - 바 높이 (기본값: 56)
- `SBAR_BAR_POSITION` - 바 위치 (기본값: "top")

#### 3. 위젯 색상 설정

- `SBAR_COLOR_CLOCK` - 시계 (기본값: COLOR_YELLOW)
- `SBAR_COLOR_CALENDAR` - 달력 (기본값: COLOR_TANGERINE)
- `SBAR_COLOR_WEATHER` - 날씨 (기본값: COLOR_CYAN)
- `SBAR_COLOR_CAFFEINATE` - 카페인 (기본값: COLOR_GREEN)
- `SBAR_COLOR_VOLUME` - 볼륨 (기본값: COLOR_BLUE)
- `SBAR_COLOR_BATTERY` - 배터리 (기본값: COLOR_ORANGE)
- `SBAR_COLOR_DISK` - 디스크 (기본값: COLOR_RED)
- `SBAR_COLOR_RAM` - RAM (기본값: COLOR_MAGENTA)
- `SBAR_COLOR_CPU` - CPU (기본값: COLOR_BLUE)
- `SBAR_COLOR_KAKAOTALK` - 카카오톡 (기본값: COLOR_YELLOW)

#### 4. 위젯별 설정

- `SBAR_CLOCK_FORMAT` - 시계 포맷 (기본값: "MM/DD HH:mm")
- `SBAR_CALENDAR_FORMAT` - 달력 포맷 (기본값: "YYYY-MM-DD")
- `SBAR_WEATHER_LOCATION` - 날씨 위치 (기본값: "Seoul")
- `SBAR_CPU_SHOW_GRAPH` - CPU 그래프 표시 (기본값: "true")
- `SBAR_CPU_SHOW_PERCENT` - CPU 퍼센트 표시 (기본값: "true")
- `SBAR_RAM_SHOW_GRAPH` - RAM 그래프 표시 (기본값: "true")
- `SBAR_RAM_SHOW_PERCENT` - RAM 퍼센트 표시 (기본값: "true")

#### 5. 위젯 활성화 설정

- `SBAR_WIDGETS_RIGHT_ENABLED` - 활성화된 위젯 목록 (공백으로 구분)
  - 예: "calendar clock weather volume battery ram cpu kakaotalk caffeinate config"
- `SBAR_CONFIG_VISIBLE` - 설정 버튼 표시 (기본값: "false")

#### 6. 폰트 설정

- `SBAR_LABEL_FONT_FAMILY` - 라벨 폰트 (기본값: "SpaceMono Nerd Font Mono")
- `SBAR_ICON_FONT_FAMILY` - 아이콘 폰트 (기본값: SBAR_LABEL_FONT_FAMILY)
- `SBAR_ICON_FONT_SIZE` - 아이콘 폰트 크기 (기본값: 18.0)
- `SBAR_LABEL_FONT_SIZE` - 라벨 폰트 크기 (기본값: 12.0)

#### 7. 업데이트 빈도

- `SBAR_ITEM_UPDATE_FREQ_DEFAULT` - 기본 (기본값: 10초)
- `SBAR_ITEM_UPDATE_FREQ_FAST` - 빠름 (기본값: 2초)
- `SBAR_ITEM_UPDATE_FREQ_SLOW` - 느림 (기본값: 30초)

## 필수 사전 작업: Tauri 파일 시스템 권한 설정

### 1. 플러그인 설치

- [ ] `pnpm add @tauri-apps/plugin-fs` (프론트엔드)
- [ ] Cargo.toml에 `tauri-plugin-fs = "2"` 추가 (백엔드)

### 2. 플러그인 초기화

- [ ] `src-tauri/src/lib.rs`에 fs 플러그인 초기화 코드 추가
  ```rust
  .plugin(tauri_plugin_fs::init())
  ```

### 3. 권한 설정

- [ ] `src-tauri/capabilities/default.json` 생성 (또는 수정)
- [ ] 파일 시스템 접근 권한 추가
  ```json
  {
    "permissions": [
      "fs:allow-read-text-file",
      "fs:allow-write-text-file",
      "path:allow-home-dir",
      "path:allow-config-dir"
    ]
  }
  ```

### 4. Config 파일 파싱 로직

- [ ] Bash 환경 변수 형식 파싱 함수
- [ ] 환경 변수 형식 생성 함수
- [ ] 파일 읽기/쓰기 wrapper 함수

## 작업 목록

### 1. 전역 Store 설정

- [ ] 상태 관리 라이브러리 선택 (zustand / jotai / context API)
- [ ] Store 구조 설계
  - [ ] Appearance 설정 (theme, barStyle)
  - [ ] Widgets 설정 (각 위젯의 enabled, format 등)
  - [ ] Advanced 설정

### 2. Store 구현

- [ ] store 파일 생성 (`src/store/configStore.ts`)
- [ ] 초기 상태 정의
- [ ] Actions 정의
  - [ ] updateAppearance
  - [ ] updateWidget
  - [ ] resetToDefaults

### 3. Config 파일 연동

- [ ] Config 파일 경로 설정
- [ ] Config 읽기 함수 구현
- [ ] Config 쓰기 함수 구현
- [ ] Tauri API 연동 (fs, path)

### 4. 컴포넌트 연동

- [ ] 각 설정 컴포넌트를 store와 연결
  - [ ] AppearanceSettings
  - [ ] WidgetsSettings (10개 위젯)
  - [ ] AdvancedSettings
- [ ] Store 값 변경 시 UI 업데이트

### 5. Save 기능 구현

- [ ] Save 버튼 클릭 핸들러 구현
- [ ] Store 상태를 config 파일에 저장
- [ ] 저장 성공/실패 피드백 (toast/notification)
- [ ] Sketchybar reload 트리거

### 6. 초기 로딩

- [ ] 앱 시작 시 config 파일에서 설정 로드
- [ ] Store 초기화
- [ ] UI 상태 동기화

### 7. 추가 기능

- [ ] Reset to Defaults 버튼 구현
- [ ] Config validation
- [ ] Error handling
