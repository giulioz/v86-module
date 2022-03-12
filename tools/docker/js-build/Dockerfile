FROM alpine:3.14 as v86-builder
WORKDIR /v86

RUN apk add --update curl clang make openjdk8 npm python3

RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y && PATH="${HOME}/.cargo/bin:${PATH}" rustup target add wasm32-unknown-unknown

CMD PATH="${HOME}/.cargo/bin:${PATH}" make all
