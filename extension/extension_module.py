import sys
import json

def get_message():
  raw_length = sys.stdin.buffer.read(4)
  if not raw_length:
    return None
  message_length = int.from_bytes(raw_length, byteorder='little')
  message = sys.stdin.buffer.read(message_length).decode('utf-8')
  return json.loads(message)

message = get_message()
print(message['data'])