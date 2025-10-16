#!/data/data/com.termux/files/usr/bin/bash

APP_DIR=~/flask_app
GIT_REPO=https://github.com/contact474747-ui/flask_app.git
PYTHON_BIN=python
LOG_FILE=$APP_DIR/flask.log

mkdir -p $APP_DIR

if [ ! -f "$APP_DIR/app.py" ]; then
    echo "Cloning GitHub repository..."
    git clone $GIT_REPO $APP_DIR
fi

cd $APP_DIR

echo "Pulling latest changes from GitHub..."
git pull

echo "Starting Flask server in background..."
nohup $PYTHON_BIN app.py > $LOG_FILE 2>&1 &

echo "✅ Flask server started. Logs: $LOG_FILE"
