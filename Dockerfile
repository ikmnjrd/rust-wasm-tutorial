FROM rust:buster as builder
WORKDIR /usr/src/myapp
ENV USER="root"
RUN curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh
RUN cargo install cargo-generate


FROM debian:buster
WORKDIR /usr/src/myapp
ENV USER="root"
RUN apt-get update && apt-get install -y curl npm nodejs git
RUN npm install npm@latest -g
COPY --from=builder /usr/local/cargo/bin /usr/local/bin
RUN rustup default stable
EXPOSE 8080

# RUN cargo generate --git https://github.com/rustwasm/wasm-pack-template