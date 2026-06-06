# Zip to Text 
(for /r %i in (*) do @if not "%~nxi"=="arena_upload.txt" (echo === START FILE: %i === & type "%i" & echo === END FILE === & echo.)) > arena_upload.txt
