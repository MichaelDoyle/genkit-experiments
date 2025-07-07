package main

import (
    "context"
    "log"
    "net/http"

    "github.com/firebase/genkit/go/genkit"
//    "github.com/firebase/genkit/go/ai"
    "github.com/firebase/genkit/go/plugins/googlegenai"
    "github.com/firebase/genkit/go/plugins/server"
)

func main() {
    ctx := context.Background()

    g, err := genkit.Init(ctx, genkit.WithPlugins(&googlegenai.GoogleAI{}))
    if err != nil {
      log.Fatal(err)
    }

    mux := http.NewServeMux()
    for _, flow := range genkit.ListFlows(g) {
        mux.HandleFunc("POST /"+flow.Name(), genkit.Handler(flow))
    }
    log.Fatal(server.Start(ctx, "127.0.0.1:3400", mux))
}
