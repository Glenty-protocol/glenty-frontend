rm -rf build && npm run build && cd build && git init && git remote add origin https://github.com/glenty-protocol/farms-min-ui && git add . && git commit -m "deployed by sh script" && git push origin master -f

