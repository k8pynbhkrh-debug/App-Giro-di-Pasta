#!/bin/zsh
set -euo pipefail

LABEL="com.girodipasta.recipe-image-sync"
PLIST="$HOME/Library/LaunchAgents/${LABEL}.plist"
LOG_FILE="/Users/eric/GitHub/App Giro di Pasta/tmp/recipe-image-watcher.log"
ERROR_LOG_FILE="/Users/eric/GitHub/App Giro di Pasta/tmp/recipe-image-watcher-error.log"
DOMAIN="gui/$(id -u)"

print_help() {
  cat <<'EOF'
Giro di Pasta watcher helper

Benutzung:
  ./scripts/watcher_help.sh start
  ./scripts/watcher_help.sh stop
  ./scripts/watcher_help.sh restart
  ./scripts/watcher_help.sh status
  ./scripts/watcher_help.sh log
  ./scripts/watcher_help.sh error
  ./scripts/watcher_help.sh help
EOF
}

case "${1:-help}" in
  start)
    launchctl bootstrap "$DOMAIN" "$PLIST" 2>/dev/null || true
    launchctl kickstart -k "$DOMAIN/$LABEL"
    echo "Watcher gestartet."
    ;;
  stop)
    launchctl bootout "$DOMAIN" "$PLIST"
    echo "Watcher gestoppt."
    ;;
  restart)
    launchctl bootout "$DOMAIN" "$PLIST" 2>/dev/null || true
    launchctl bootstrap "$DOMAIN" "$PLIST"
    launchctl kickstart -k "$DOMAIN/$LABEL"
    echo "Watcher neu gestartet."
    ;;
  status)
    launchctl print "$DOMAIN/$LABEL" | sed -n '1,25p'
    ;;
  log)
    tail -n 30 "$LOG_FILE"
    ;;
  error)
    if [ -f "$ERROR_LOG_FILE" ]; then
      tail -n 30 "$ERROR_LOG_FILE"
    else
      echo "Kein Fehlerlog vorhanden."
    fi
    ;;
  help|--help|-h)
    print_help
    ;;
  *)
    echo "Unbekannter Befehl: $1"
    echo
    print_help
    exit 1
    ;;
esac
