<img width="743" height="572" alt="스크린샷 2025-11-10 16 59 50" src="https://github.com/user-attachments/assets/1e235d92-c485-421b-b977-7d894a109270" />
<img width="743" height="572" alt="스크린샷 2025-11-10 17 00 06" src="https://github.com/user-attachments/assets/a985b9d9-935d-467f-9435-ac78b1757881" />
<img width="743" height="572" alt="스크린샷 2025-11-10 17 00 09" src="https://github.com/user-attachments/assets/c884e9ea-3d09-4536-a452-889dc067b475" />
<img width="743" height="572" alt="스크린샷 2025-11-10 17 00 17" src="https://github.com/user-attachments/assets/30cac5d0-1552-41aa-9071-a05537cb05eb" />
<img width="743" height="572" alt="스크린샷 2025-11-10 17 00 20" src="https://github.com/user-attachments/assets/56d18132-8aa9-4157-9b46-3d5d84b2035e" />


# Sketchybar Gray Settings

Tauri 기반 Sketchybar 설정 앱

## 개발 환경

- Tauri 2
- React 19
- TypeScript
- Vite

## 개발

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행 (프론트엔드만)
pnpm dev

# Tauri 개발 모드
pnpm tauri dev
```

## 빌드 및 설치

```bash
# 프로덕션 빌드 및 설치
pnpm run install

# 개발 모드로 설치 (테스트용)
pnpm run install:dev

# 또는 단계별로:
# 1. Tauri 앱 빌드
pnpm build:tauri

# 2. Sketchybar에 설치
./scripts/install.sh           # 프로덕션
./scripts/install.sh --dev     # 개발 모드
```

### 개발 모드 vs 프로덕션

- **프로덕션**: `~/.config/sketchybar/bin/settings`에 설치
- **개발 모드**: `~/.config/sketchybar/bin/dev`에 설치 (우선순위 높음)

개발 중에는 `install:dev`를 사용하여 테스트하고, 릴리즈할 때는 `install`을 사용하세요.
`open_settings.sh`는 dev가 있으면 dev를 우선 실행합니다.

## 설치 후

설치 스크립트는 다음 작업을 수행합니다:

1. 빌드된 바이너리를 `~/.config/sketchybar/bin/settings`에 복사
2. `~/.config/sketchybar/plugins/config/open_settings.sh` 업데이트
3. Sketchybar의 config 아이템이 이 앱을 실행하도록 설정

Sketchybar를 reload하여 변경사항을 적용하세요:

```bash
sketchybar --reload
```

## 구조

```
src/
├── components/
│   ├── common/          # 공통 컴포넌트 (Button, Heading, Label, etc.)
│   ├── settings/        # 설정 화면 (Appearance, Widgets, Advanced)
│   ├── widgets/         # 위젯별 설정 컴포넌트
│   ├── Content.tsx      # 카테고리별 컨텐츠 라우터
│   ├── Layout.tsx       # 레이아웃 컴포넌트
│   └── Sidebar.tsx      # 사이드바
├── hooks/              # React hooks
├── themes/             # 테마 정의
└── App.tsx

scripts/
└── install.sh          # Sketchybar 설치 스크립트
```

## Config 파일

설정은 `~/.config/sketchybar/user.sketchybarrc`에 Bash 환경 변수 형식으로 저장됩니다.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)
