# Pikachu Problem Service

# How routing in working

- /api/v1/problems/ping
    - route starts from api

    /api           -> /v1         -> /problems         -> /ping
    apiRouter      -> v1Router    -> problemRouter     -> problemController  -> Service Layer
