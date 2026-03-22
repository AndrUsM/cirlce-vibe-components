echo "Building"
rm -rf ./build/*
npx tsc
npx webpack
# npx rsbuild build