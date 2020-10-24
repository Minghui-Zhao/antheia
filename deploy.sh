npm run build && \
cp CNAME ./build && \
cd build && \
git init && \ 
git remote add origin https://github.com/Minghui-Zhao/antheia-prod.git && \
git add -A && \
git commit -m "deploy" && \
git push -f origin master && \
cd ../ && \
rm -rf build && \
git add -A && \
git commit -m "update" && \
git push origin master