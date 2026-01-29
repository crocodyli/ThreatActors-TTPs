# Used by BlackSuit to delete the Ransom file.

cmd /v/c "set f={malware_filename}&for /l %l in () do if exist !f! (del /f/a "!f!") else (exit)"
