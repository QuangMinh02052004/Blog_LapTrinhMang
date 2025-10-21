#!/bin/bash

# Script tự động deploy blog lên GitHub Pages
# Sử dụng: ./deploy.sh "commit message"

set -e  # Dừng nếu có lỗi

echo "🔍 Checking git status..."
git status

echo ""
echo "📦 Adding all changes..."
git add .

# Lấy commit message từ tham số hoặc dùng message mặc định
COMMIT_MSG="${1:-Update blog content}"

echo ""
echo "💾 Committing changes..."
git commit -m "$(cat <<EOF
${COMMIT_MSG}

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
EOF
)"

echo ""
echo "🚀 Pushing to GitHub..."
git push origin main

echo ""
echo "✅ Successfully pushed to GitHub!"
echo ""
echo "📊 View deployment status:"
echo "   https://github.com/QuangMinh02052004/Blog_LapTrinhMang/actions"
echo ""
echo "🌐 Your site will be live at:"
echo "   https://quangminh02052004.github.io/Blog_LapTrinhMang/"
echo ""
echo "⏳ Deployment usually takes 2-3 minutes..."
echo ""
echo "💡 Tip: Clear browser cache (Ctrl+Shift+R) if you don't see changes"
